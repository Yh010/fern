import { ErrorDeclaration, ErrorName } from "@fern-fern/ir-model/errors";
import { IntermediateRepresentation } from "@fern-fern/ir-model/ir";
import { FernFilepath } from "@fern-fern/ir-model/types";

type SimpleErrorName = string;

export class ErrorResolver {
    private resolvedErrors: Record<FernFilepath, Record<SimpleErrorName, ErrorDeclaration>> = {};

    constructor(intermediateRepresentation: IntermediateRepresentation) {
        for (const error of intermediateRepresentation.errors) {
            const errorsAtFilepath = (this.resolvedErrors[error.name.fernFilepath] ??= {});
            errorsAtFilepath[error.name.name] = error;
        }
    }

    public getErrorDeclarationFromName(errorName: ErrorName): ErrorDeclaration {
        const resolvedError = this.resolvedErrors[errorName.fernFilepath]?.[errorName.name];
        if (resolvedError == null) {
            throw new Error("Error not found: " + errorNameToString(errorName));
        }
        return resolvedError;
    }
}

function errorNameToString(errorName: ErrorName) {
    return `${errorName.fernFilepath}.${errorName.name}`;
}
