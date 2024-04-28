/**
 * This file was auto-generated by Fern from our API Definition.
 */

package types;

import com.fasterxml.jackson.annotation.JsonProperty;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;

public final class Failure {
  private Failure() {
  }

  @JsonProperty("status")
  public String getStatus() {
    return "failure";
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof Failure;
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }
}