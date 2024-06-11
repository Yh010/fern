/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.playlist.errors;

import com.seed.trace.core.SeedTraceApiError;

public final class SeedTraceUnauthorizedError extends SeedTraceApiError {
    public SeedTraceUnauthorizedError(Object body) {
        super("UnauthorizedError", 401, body);
    }
}