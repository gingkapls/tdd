const calculator = {
  add: (num1: number, num2: number): number => num1 + num2,
  subtract: (num1: number, num2: number): number => num1 - num2,
  multiply: (num1: number, num2: number): number => num1 * num2,
  divide: (num1: number, num2: number): number => num1 / num2,
};

export default Object.freeze(calculator);
