package com.seed.exhaustive.resources.types.object.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = NestedObjectWithRequiredField.Builder.class)
public final class NestedObjectWithRequiredField {
    private final String string;

    private final ObjectWithOptionalField nestedObject;

    private NestedObjectWithRequiredField(String string, ObjectWithOptionalField nestedObject) {
        this.string = string;
        this.nestedObject = nestedObject;
    }

    @JsonProperty("string")
    public String getString() {
        return string;
    }

    @JsonProperty("NestedObject")
    public ObjectWithOptionalField getNestedObject() {
        return nestedObject;
    }

    @Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof NestedObjectWithRequiredField && equalTo((NestedObjectWithRequiredField) other);
    }

    private boolean equalTo(NestedObjectWithRequiredField other) {
        return string.equals(other.string) && nestedObject.equals(other.nestedObject);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.string, this.nestedObject);
    }

    @Override
    public String toString() {
        return "NestedObjectWithRequiredField{" + "string: " + string + ", nestedObject: " + nestedObject + "}";
    }

    public static StringStage builder() {
        return new Builder();
    }

    public interface StringStage {
        NestedObjectStage string(String string);

        Builder from(NestedObjectWithRequiredField other);
    }

    public interface NestedObjectStage {
        _FinalStage nestedObject(ObjectWithOptionalField nestedObject);
    }

    public interface _FinalStage {
        NestedObjectWithRequiredField build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements StringStage, NestedObjectStage, _FinalStage {
        private String string;

        private ObjectWithOptionalField nestedObject;

        private Builder() {}

        @Override
        public Builder from(NestedObjectWithRequiredField other) {
            string(other.getString());
            nestedObject(other.getNestedObject());
            return this;
        }

        @Override
        @JsonSetter("string")
        public NestedObjectStage string(String string) {
            this.string = string;
            return this;
        }

        @Override
        @JsonSetter("NestedObject")
        public _FinalStage nestedObject(ObjectWithOptionalField nestedObject) {
            this.nestedObject = nestedObject;
            return this;
        }

        @Override
        public NestedObjectWithRequiredField build() {
            return new NestedObjectWithRequiredField(string, nestedObject);
        }
    }
}
