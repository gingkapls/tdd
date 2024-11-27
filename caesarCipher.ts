const isUpperAlpha = (c: string): boolean =>
  c.length === 1 &&
  c.charCodeAt(0) >= "A".charCodeAt(0) &&
  c.charCodeAt(0) <= "Z".charCodeAt(0);

const isLowerAlpha = (c: string): boolean =>
  c.length === 1 &&
  c.charCodeAt(0) >= "a".charCodeAt(0) &&
  c.charCodeAt(0) <= "z".charCodeAt(0);

const clampChar = (c: string, key: number): string => {
  let maxCode = 0;
  let minCode = 0;

  if (isLowerAlpha(c)) {
    [minCode, maxCode] = ["a".charCodeAt(0), "z".charCodeAt(0)];
  } else if (isUpperAlpha(c)) {
    [minCode, maxCode] = ["A".charCodeAt(0), "Z".charCodeAt(0)];
  } else {
    return c;
  }

  const newCode: number = c.charCodeAt(0) + key;
  // Wrap alphabet to beginning
  // maxCode + 1 because we want to loop back to 0 not 1
  const clampedCode: number =
    newCode > maxCode ? minCode + (newCode % (maxCode + 1)) : newCode;

  return String.fromCharCode(clampedCode);
};

const caesarCipher = (str: string, key: number = 1): string =>
  Array.from(str, (c) => clampChar(c, key)).join("");

export default caesarCipher;
