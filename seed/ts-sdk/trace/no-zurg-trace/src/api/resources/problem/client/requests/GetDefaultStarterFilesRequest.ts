/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../..";

export interface GetDefaultStarterFilesRequest {
    inputParams: SeedTrace.VariableTypeAndName[];
    outputType: SeedTrace.VariableType;
    /**
     * The name of the `method` that the student has to complete.
     * The method name cannot include the following characters:
     *   - Greater Than `>`
     *   - Less Than `<``
     *   - Equals `=`
     *   - Period `.`
     *
     */
    methodName: string;
}