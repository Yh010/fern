package com.seed.errorProperty.resources.errors.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = PropertyBasedErrorTestBody.Builder.class)
public final class PropertyBasedErrorTestBody {
    private final String message;

    private PropertyBasedErrorTestBody(String message) {
        this.message = message;
    }

    @JsonProperty("message")
    public String getMessage() {
        return message;
    }

    @Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof PropertyBasedErrorTestBody && equalTo((PropertyBasedErrorTestBody) other);
    }

    private boolean equalTo(PropertyBasedErrorTestBody other) {
        return message.equals(other.message);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.message);
    }

    @Override
    public String toString() {
        return "PropertyBasedErrorTestBody{" + "message: " + message + "}";
    }

    public static MessageStage builder() {
        return new Builder();
    }

    public interface MessageStage {
        _FinalStage message(String message);

        Builder from(PropertyBasedErrorTestBody other);
    }

    public interface _FinalStage {
        PropertyBasedErrorTestBody build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements MessageStage, _FinalStage {
        private String message;

        private Builder() {}

        @Override
        public Builder from(PropertyBasedErrorTestBody other) {
            message(other.getMessage());
            return this;
        }

        @Override
        @JsonSetter("message")
        public _FinalStage message(String message) {
            this.message = message;
            return this;
        }

        @Override
        public PropertyBasedErrorTestBody build() {
            return new PropertyBasedErrorTestBody(message);
        }
    }
}
