import {test, describe, expect} from "@jest/globals";
import capitalize from "./capitalize";

describe("capitalize function", () => {
    test("capitalizes a lowercase string", () => {
        expect(capitalize("hello")).toBe("Hello");
    })
    test("capitalizes an uppercase string", () => {
        expect(capitalize("HELLO")).toBe("Hello");
    })
    test("capitalizes a mixedCase string", () => {
        expect(capitalize("hELlo")).toBe("Hello");
    })
})