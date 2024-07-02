/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.alias.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedAliasException extends RuntimeException {
    public SeedAliasException(String message) {
        super(message);
    }

    public SeedAliasException(String message, Exception e) {
        super(message, e);
    }
}