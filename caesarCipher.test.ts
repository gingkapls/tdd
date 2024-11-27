import { describe, test, expect } from "@jest/globals";
import caesarCipher from "./caesarCipher";

describe("Caesar Cipher", () => {
  test("works with lowercase string and no explicit key", () => {
    expect(caesarCipher("abc")).toBe("bcd");
  });

  test("works with uppercase string and no explicit key", () => {
    expect(caesarCipher("ABC")).toBe("BCD");
  });

  test("works with lowercase string and explicit key", () => {
    expect(caesarCipher("abc", 2)).toBe("cde");
  });

  test("works with uppercase string and explicit key", () => {
    expect(caesarCipher("ABC", 2)).toBe("CDE");
  });

  test("works with non alphabetic characters", () => {
    expect(caesarCipher("ABC!", 2)).toBe("CDE!");
  });

  test("handles out of bounds lowercase string", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("handles out of bounds uppercase string", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });
});
