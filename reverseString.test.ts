import { test, describe, expect } from "@jest/globals";
import reverseString from "./reverseString";

describe("reverse a string", () => {
  test("reverse a word", () => {
    expect(reverseString("world")).toBe("dlrow");
  });

  test("reverse multiple words", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

   test("reverse numbers", () => {
    expect(reverseString("1234")).toBe("4321");
  });

  test("reverse multiple numbers", () => {
    expect(reverseString("1234 5678")).toBe("8765 4321");
  });


 

});
