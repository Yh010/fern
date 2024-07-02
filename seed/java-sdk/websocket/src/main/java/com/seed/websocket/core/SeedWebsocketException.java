/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.websocket.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedWebsocketException extends RuntimeException {
    public SeedWebsocketException(String message) {
        super(message);
    }

    public SeedWebsocketException(String message, Exception e) {
        super(message, e);
    }
}