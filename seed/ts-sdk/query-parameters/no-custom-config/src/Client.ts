/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { User } from "./api/resources/user/client/Client";

export declare namespace SeedQueryParametersClient {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class SeedQueryParametersClient {
    constructor(protected readonly _options: SeedQueryParametersClient.Options) {}

    protected _user: User | undefined;

    public get user(): User {
        return (this._user ??= new User(this._options));
    }
}