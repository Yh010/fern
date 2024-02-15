/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as SeedTrace from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const VoidFunctionDefinition: core.serialization.ObjectSchema<serializers.v2.VoidFunctionDefinition.Raw, SeedTrace.v2.VoidFunctionDefinition>;
export declare namespace VoidFunctionDefinition {
    interface Raw {
        parameters: serializers.v2.Parameter.Raw[];
        code: serializers.v2.FunctionImplementationForMultipleLanguages.Raw;
    }
}