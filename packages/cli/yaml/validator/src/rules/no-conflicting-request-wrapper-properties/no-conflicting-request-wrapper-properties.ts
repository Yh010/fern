import { assertNever } from "@fern-api/core-utils";
import { RelativeFilePath } from "@fern-api/fs-utils";
import {
    DEFAULT_BODY_PROPERTY_KEY_IN_WRAPPER,
    getHeaderName,
    getQueryParameterName,
    TypeResolverImpl,
} from "@fern-api/ir-generator";
import { Workspace } from "@fern-api/workspace-loader";
import { isInlineRequestBody, RawSchemas, ServiceFileSchema } from "@fern-api/yaml-schema";
import chalk from "chalk";
import { Rule, RuleViolation } from "../../Rule";
import {
    convertObjectPropertyWithPathToString,
    getAllPropertiesForObject,
    ObjectPropertyWithPath,
} from "../../utils/getAllPropertiesForObject";

export const NoConflictingRequestWrapperPropertiesRule: Rule = {
    name: "no-conflicting-request-wrapper-properties",
    create: ({ workspace }) => {
        return {
            serviceFile: {
                httpEndpoint: ({ endpoint, service }, { contents: serviceFile, relativeFilepath }) => {
                    const nameToProperties = getRequestWrapperPropertiesByName({
                        endpoint,
                        service,
                        relativeFilepath,
                        serviceFile,
                        workspace,
                    });

                    const violations: RuleViolation[] = [];
                    for (const [name, propertiesWithName] of Object.entries(nameToProperties)) {
                        if (propertiesWithName.length <= 1) {
                            continue;
                        }
                        violations.push({
                            severity: "error",
                            message:
                                `Multiple request properties have the name ${chalk.bold(
                                    name
                                )}. This is not suitable for code generation. Use the "name" property to deconflict.\n` +
                                propertiesWithName
                                    .map((property) => `  - ${convertRequestWrapperPropertyToString(property)}`)
                                    .join("\n"),
                        });
                    }

                    return violations;
                },
            },
        };
    },
};

type RequestWrapperProperty =
    | ServiceHeaderRequestWrapperProperty
    | EndpointQueryParameterRequestWrapperProperty
    | EndpointHeaderRequestWrapperProperty
    | InlinedBodyRequestWrapperProperty
    | ReferencedBodyRequestWrapperProperty;

interface ServiceHeaderRequestWrapperProperty {
    type: "service-header";
    headerKey: string;
    header: RawSchemas.HttpHeaderSchema;
}

interface EndpointQueryParameterRequestWrapperProperty {
    type: "endpoint-query-parameter";
    queryParameterKey: string;
    queryParameter: RawSchemas.HttpQueryParameterSchema;
}

interface EndpointHeaderRequestWrapperProperty {
    type: "endpoint-header";
    headerKey: string;
    header: RawSchemas.HttpHeaderSchema;
}

interface InlinedBodyRequestWrapperProperty {
    type: "inlined-body";
    property: ObjectPropertyWithPath;
}

interface ReferencedBodyRequestWrapperProperty {
    type: "referenced-body";
    propertyName: string;
}

function getRequestWrapperPropertiesByName({
    endpoint,
    service,
    relativeFilepath,
    serviceFile,
    workspace,
}: {
    endpoint: RawSchemas.HttpEndpointSchema;
    service: RawSchemas.HttpServiceSchema;
    relativeFilepath: RelativeFilePath;
    serviceFile: ServiceFileSchema;
    workspace: Workspace;
}): Record<string, RequestWrapperProperty[]> {
    const nameToProperties: Record<string, RequestWrapperProperty[]> = {};
    const addProperty = (name: string, property: RequestWrapperProperty) => {
        const propertiesForName = (nameToProperties[name] ??= []);
        propertiesForName.push(property);
    };

    addProperty(DEFAULT_BODY_PROPERTY_KEY_IN_WRAPPER, {
        type: "referenced-body",
        propertyName: DEFAULT_BODY_PROPERTY_KEY_IN_WRAPPER,
    });

    if (service.headers != null) {
        for (const [headerKey, header] of Object.entries(service.headers)) {
            addProperty(getHeaderName({ headerKey, header }).name, {
                type: "service-header",
                headerKey,
                header,
            });
        }
    }

    if (endpoint.request != null && typeof endpoint.request !== "string") {
        if (endpoint.request.headers != null) {
            for (const [headerKey, header] of Object.entries(endpoint.request.headers)) {
                addProperty(getHeaderName({ headerKey, header }).name, {
                    type: "endpoint-header",
                    headerKey,
                    header,
                });
            }
        }

        if (endpoint.request["query-parameters"] != null) {
            for (const [queryParameterKey, queryParameter] of Object.entries(endpoint.request["query-parameters"])) {
                addProperty(getQueryParameterName({ queryParameterKey, queryParameter }).name, {
                    type: "endpoint-query-parameter",
                    queryParameterKey,
                    queryParameter,
                });
            }
        }

        if (endpoint.request.body != null && isInlineRequestBody(endpoint.request.body)) {
            const allProperties = getAllPropertiesForObject({
                typeName: "<Inlined Request>",
                objectDeclaration: {
                    extends: endpoint.request.body.extends,
                    properties: endpoint.request.body.properties ?? {},
                },
                filepathOfDeclaration: relativeFilepath,
                serviceFile,
                workspace,
                typeResolver: new TypeResolverImpl(workspace),
            });

            for (const property of allProperties) {
                addProperty(property.name, {
                    type: "inlined-body",
                    property,
                });
            }
        }
    }

    return nameToProperties;
}

function convertRequestWrapperPropertyToString(property: RequestWrapperProperty): string {
    switch (property.type) {
        case "service-header":
            return `Service header "${property.headerKey}"`;
        case "endpoint-header":
            return `Endpoint header "${property.headerKey}"`;
        case "endpoint-query-parameter":
            return `Query Parameter "${property.queryParameterKey}"`;
        case "inlined-body":
            return `Body property: ${convertObjectPropertyWithPathToString({
                property: property.property,
                prefixBreadcrumbs: ["<Request Body>"],
            })}`;
        case "referenced-body":
            return `Body property "${property.propertyName}"`;
        default:
            assertNever(property);
    }
}