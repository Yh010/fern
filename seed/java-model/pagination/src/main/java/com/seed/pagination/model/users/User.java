/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.pagination.model.users;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.pagination.core.ObjectMappers;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = User.Builder.class)
public final class User {
    private final String name;

    private final int id;

    private User(String name, int id) {
        this.name = name;
        this.id = id;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("id")
    public int getId() {
        return id;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof User && equalTo((User) other);
    }

    private boolean equalTo(User other) {
        return name.equals(other.name) && id == other.id;
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.name, this.id);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static NameStage builder() {
        return new Builder();
    }

    public interface NameStage {
        IdStage name(String name);

        Builder from(User other);
    }

    public interface IdStage {
        _FinalStage id(int id);
    }

    public interface _FinalStage {
        User build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements NameStage, IdStage, _FinalStage {
        private String name;

        private int id;

        private Builder() {}

        @java.lang.Override
        public Builder from(User other) {
            name(other.getName());
            id(other.getId());
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public IdStage name(String name) {
            this.name = name;
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public _FinalStage id(int id) {
            this.id = id;
            return this;
        }

        @java.lang.Override
        public User build() {
            return new User(name, id);
        }
    }
}