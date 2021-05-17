import { parseDecimal } from "./utils";

export const convert2Roman = (number: Number): string => {
  if (number <= 0 || number >= 5000) {
    throw new Error("Invalid number");
  }
  const numberAsString: string = `${number}`;
  const [integerNumberAsString, decimal, ...rest] = numberAsString.split(".");
  if (rest.length > 0) {
    throw new Error("Invalid number format");
  }

  const numberLength: number = integerNumberAsString.length;

  const integerPart = Array.from(integerNumberAsString)
    .map((digit, index) => {
      const powerOfTen = numberLength - index - 1;

      return parseDecimal(+digit, powerOfTen);
    })
    .join("");

  if (decimal === "5") {
    return `${integerPart}S`;
  }
  return integerPart;
};
