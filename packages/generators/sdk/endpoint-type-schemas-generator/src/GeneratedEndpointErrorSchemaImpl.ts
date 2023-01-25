import { HttpEndpoint, HttpService } from "@fern-fern/ir-model/http";
import { ErrorDiscriminationByPropertyStrategy } from "@fern-fern/ir-model/ir";
import { Zurg } from "@fern-typescript/commons";
import { EndpointErrorUnionContext, EndpointTypeSchemasContext, GeneratedUnion } from "@fern-typescript/contexts";
import { ErrorResolver } from "@fern-typescript/resolvers";
import { GeneratedUnionSchema, RawNoPropertiesSingleUnionType } from "@fern-typescript/union-schema-generator";
import { ts } from "ts-morph";
import { GeneratedEndpointErrorSchema } from "./GeneratedEndpointErrorSchema";
import { RawSinglePropertyErrorSingleUnionType } from "./RawSinglePropertyErrorSingleUnionType";

export declare namespace GeneratedEndpointErrorSchemaImpl {
    export interface Init {
        service: HttpService;
        endpoint: HttpEndpoint;
        errorResolver: ErrorResolver;
        discriminationStrategy: ErrorDiscriminationByPropertyStrategy;
    }
}

export class GeneratedEndpointErrorSchemaImpl implements GeneratedEndpointErrorSchema {
    private static ERROR_SCHEMA_NAME = "Error";

    private service: HttpService;
    private endpoint: HttpEndpoint;
    private GeneratedSdkErrorUnionSchema: GeneratedUnionSchema<EndpointTypeSchemasContext>;

    constructor({ service, endpoint, errorResolver, discriminationStrategy }: GeneratedEndpointErrorSchemaImpl.Init) {
        this.service = service;
        this.endpoint = endpoint;

        this.GeneratedSdkErrorUnionSchema = new GeneratedUnionSchema<EndpointTypeSchemasContext>({
            typeName: GeneratedEndpointErrorSchemaImpl.ERROR_SCHEMA_NAME,
            shouldIncludeDefaultCaseInTransform: false,
            discriminant: discriminationStrategy.discriminant,
            getReferenceToSchema: (context) =>
                context.endpointTypeSchemas.getReferenceToEndpointTypeSchemaExport(
                    service.name.fernFilepath,
                    endpoint.name,
                    GeneratedEndpointErrorSchemaImpl.ERROR_SCHEMA_NAME
                ),
            getGeneratedUnion: (context) => this.getErrorUnion(context),
            singleUnionTypes: endpoint.errors.map((responseError) => {
                const errorDeclaration = errorResolver.getErrorDeclarationFromName(responseError.error);
                if (errorDeclaration.type == null) {
                    return new RawNoPropertiesSingleUnionType({
                        discriminant: discriminationStrategy.discriminant,
                        discriminantValue: errorDeclaration.discriminantValue,
                    });
                } else {
                    return new RawSinglePropertyErrorSingleUnionType({
                        discriminant: discriminationStrategy.discriminant,
                        discriminantValue: errorDeclaration.discriminantValue,
                        errorName: responseError.error,
                        discriminationStrategy,
                    });
                }
            }),
        });
    }

    public writeToFile(context: EndpointTypeSchemasContext): void {
        this.GeneratedSdkErrorUnionSchema.writeSchemaToFile(context);
    }

    public getReferenceToRawShape(context: EndpointTypeSchemasContext): ts.TypeNode {
        return this.GeneratedSdkErrorUnionSchema.getReferenceToRawShape(context);
    }

    public getReferenceToZurgSchema(context: EndpointTypeSchemasContext): Zurg.Schema {
        return this.GeneratedSdkErrorUnionSchema.getReferenceToZurgSchema(context);
    }

    private getErrorUnion(context: EndpointTypeSchemasContext): GeneratedUnion<EndpointErrorUnionContext> {
        return context.endpointErrorUnion
            .getGeneratedEndpointErrorUnion(this.service.name.fernFilepath, this.endpoint.name)
            .getErrorUnion();
    }
}
