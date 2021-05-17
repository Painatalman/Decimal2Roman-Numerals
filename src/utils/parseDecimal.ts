const ROMAN_1000 = "M";
const ROMAN_500 = "D";
const ROMAN_100 = "C";
const ROMAN_50 = "L";
const ROMAN_10 = "X";
const ROMAN_5 = "V";
const ROMAN_1 = "I";
const ROMAN_0 = "";

const thousands = [ROMAN_1000];
const hundreds = [ROMAN_500, ROMAN_100];
const tens = [ROMAN_50, ROMAN_10];
const units = [ROMAN_5, ROMAN_1];

function isInteger(number: number) {
  return parseInt(`${number}`) === number;
}

function validateInputs(digit: number, powerOfTen: number) {
  if (digit > 9 || !isInteger(digit)) {
    throw new Error("First argument must be an integer from 0 to 9");
  }
  if (powerOfTen > 3 || !isInteger(powerOfTen)) {
    throw new Error("Second argument must be an integer from 0 to 3");
  }
  if (powerOfTen === 3 && digit > 4) {
    throw new Error("For a power of 3, first argument must be below 5");
  }
}

function getOneFiveAndTenUnits(powerOfTen: number): [string, string, string] {
  if (powerOfTen === 2) return [ROMAN_100, ROMAN_500, ROMAN_1000];
  if (powerOfTen === 1) return [ROMAN_10, ROMAN_50, ROMAN_100];

  return [ROMAN_1, ROMAN_5, ROMAN_10];
}

function getThousands(numberOfThousands: number): string {
  return new Array(numberOfThousands).fill(ROMAN_1000).join("");
}

/**
 * returns the characters for a specific decimal, based on its power of 10
 */
export default (digit: number, powerOfTen: number): string => {
  validateInputs(digit, powerOfTen);
  if (digit === 0) return ROMAN_0;
  if (powerOfTen === 3) return getThousands(digit);

  const [one, five, ten] = getOneFiveAndTenUnits(powerOfTen);
  switch (digit) {
    case 1:
      return `${one}`;
    case 2:
      return `${one}${one}`;
    case 3:
      return `${one}${one}${one}`;
    case 4:
      return `${one}${five}`;
    case 5:
      return `${five}`;
    case 6:
      return `${five}${one}`;
    case 7:
      return `${five}${one}${one}`;
    case 8:
      return `${five}${one}${one}${one}`;
    default:
      // it's 9
      return `${one}${ten}`;
  }
};
