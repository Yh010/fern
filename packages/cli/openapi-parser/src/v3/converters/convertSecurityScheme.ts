import { SecurityScheme } from "@fern-fern/openapi-ir-model/ir";
import { OpenAPIV3 } from "openapi-types";
import { isReferenceObject } from "../isReferenceObject";

export function convertSecurityScheme(
    securityScheme: OpenAPIV3.SecuritySchemeObject | OpenAPIV3.ReferenceObject
): SecurityScheme {
    if (isReferenceObject(securityScheme)) {
        throw new Error(`Converting referenced security schemes is unsupported: ${JSON.stringify(securityScheme)}`);
    }
    return convertSecuritySchemeHelper(securityScheme);
}

function convertSecuritySchemeHelper(securityScheme: OpenAPIV3.SecuritySchemeObject): SecurityScheme {
    if (securityScheme.type === "apiKey" && securityScheme.in === "header") {
        return SecurityScheme.header({
            headerName: securityScheme.name,
        });
    }
    throw new Error(`Failed to convert security scheme ${JSON.stringify(securityScheme)}`);
}