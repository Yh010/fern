/**
 * This file was auto-generated by Fern from our API Definition.
 */

package types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.lang.Integer;
import java.lang.Object;
import java.lang.String;

public final class LargeInteger {
  private final int value;

  private LargeInteger(int value) {
    this.value = value;
  }

  @JsonValue
  public int get() {
    return this.value;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    return this == other || (other instanceof LargeInteger && this.value == ((LargeInteger) other).value);
  }

  @java.lang.Override
  public int hashCode() {
    return Integer.hashCode(value);
  }

  @java.lang.Override
  public String toString() {
    return Integer.toString(value);
  }

  @JsonCreator(
      mode = JsonCreator.Mode.DELEGATING
  )
  public static LargeInteger of(int value) {
    return new LargeInteger(value);
  }

  public static LargeInteger valueOf(String value) {
    return of(Integer.parseInt(value));
  }
}