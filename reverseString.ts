const reverseString = (str: string): string =>
  Array.from(str, (_, idx) => str.at(-idx - 1)).join("");

export default reverseString;
