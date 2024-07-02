/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const FontWeight: core.serialization.Schema<serializers.FontWeight.Raw, FernDocsConfig.FontWeight> =
    core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.number()]);

export declare namespace FontWeight {
    type Raw = string | number;
}