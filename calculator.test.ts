import { test, describe, expect } from "@jest/globals";
import calculator from "./calculator";

describe("add module", () => {
  test("adds two positive integers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("adds two negative integers", () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });

  test("adds two integers", () => {
    expect(calculator.add(1, -2)).toBe(-1);
  });

  test("adds two positive numbers", () => {
    expect(calculator.add(1.5, 2.5)).toBeCloseTo(4);
  });

  test("adds two numbers", () => {
    expect(calculator.add(1.5, -2.5)).toBeCloseTo(-1.0);
  });
});

describe("subtract module", () => {
  test("subtracts two positive integers", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  test("subtracts two negative integers", () => {
    expect(calculator.subtract(-1, -2)).toBe(1);
  });

  test("subtracts two integers", () => {
    expect(calculator.subtract(1, -2)).toBe(3);
  });

  test("subtracts two positive numbers", () => {
    expect(calculator.subtract(1.5, 2.5)).toBeCloseTo(-1.0);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(1.5, -2.5)).toBeCloseTo(4.0);
  });
});

describe("multiply module", () => {
  test("multiplies two positive integers", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test("multiplies two negative integers", () => {
    expect(calculator.multiply(-1, -2)).toBe(2);
  });

  test("multiplies two integers", () => {
    expect(calculator.multiply(1, -2)).toBe(-2);
  });

  test("multiplies two positive numbers", () => {
    expect(calculator.multiply(1.5, 2.5)).toBeCloseTo(3.75);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(1.5, -2.5)).toBeCloseTo(-3.75);
  });
});

describe("divide module", () => {
  test("divides two positive integers", () => {
    expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
  });

  test("divides two negative integers", () => {
    expect(calculator.divide(-1, -2)).toBeCloseTo(0.5);
  });

  test("divides two integers", () => {
    expect(calculator.divide(1, -2)).toBeCloseTo(-0.5);
  });

  test("divides two positive numbers", () => {
    expect(calculator.divide(1.5, 2.5)).toBeCloseTo(0.6);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(1.5, -2.5)).toBeCloseTo(-0.6);
  });
});
