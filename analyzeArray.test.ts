import { describe, test, expect } from "@jest/globals";
import analyzeArray from "./analyzeArray";

describe("analyzes array length", () => {
  test("gets length of empty array", () => {
    expect(analyzeArray([]).length).toBe(0);
  });

  test("gets length of non-empty array", () => {
    expect(analyzeArray([1, 2, 3, 5, 10, -1, 1]).length).toBe(7);
  });

  test("gets length of sparse array", () => {
    expect(analyzeArray([1, 2, , 4]).length).toBe(4);
  });
});

describe("analyzes minimum element in array", () => {
  test("gets minimum in an empty array", () => {
    expect(analyzeArray([]).min).toBe(0);
  });

  test("gets minimum in a non-empty array", () => {
    expect(analyzeArray([1, 2, 3, 5, 10, -1, 1]).min).toBe(-1);
  });

  test("gets minimum in a parse array", () => {
    expect(analyzeArray([0, 1, 2, , 4, 5, -4]).min).toBe(-4);
  });
});

describe("analyzes maximum element in array", () => {
  test("gets maximum in an empty array", () => {
    expect(analyzeArray([]).max).toBe(0);
  });

  test("gets maximum in a non-empty array", () => {
    expect(analyzeArray([1, 2, 3, 5, 10, -1, 1]).max).toBe(10);
  });

  test("gets maximum in a parse array", () => {
    expect(analyzeArray([0, 1, 2, , 4, 5, -4]).max).toBe(5);
  });
});

describe("analyzes the average in array", () => {
  test("gets average in an empty array", () => {
    expect(analyzeArray([]).average).toBe(0);
  });

  test("gets average in a non-empty array", () => {
    expect(analyzeArray([1, 2, 3, 5, 10, -1, 1]).average).toBeCloseTo(3);
  });

  test("gets average in a parse array", () => {
    expect(analyzeArray([0, 1, 2, , 4, 5, -4]).average).toBeCloseTo(1.142);
  });
});