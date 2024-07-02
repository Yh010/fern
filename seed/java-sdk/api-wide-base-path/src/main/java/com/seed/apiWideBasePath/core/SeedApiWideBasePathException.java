/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.apiWideBasePath.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedApiWideBasePathException extends RuntimeException {
    public SeedApiWideBasePathException(String message) {
        super(message);
    }

    public SeedApiWideBasePathException(String message, Exception e) {
        super(message, e);
    }
}