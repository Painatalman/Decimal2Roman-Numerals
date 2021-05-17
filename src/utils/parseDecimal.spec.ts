import { parseDecimal } from ".";

describe("parse decimal", () => {
  describe("invalid inputs", () => {
    it("throws when power is above 3", () => {
      expect(() => parseDecimal(1, 4)).toThrow(
        "Second argument must be an integer from 0 to 3"
      );
    });
    it("throws when digit is above 4 and power is 3", () => {
      expect(() => parseDecimal(5, 3)).toThrow(
        "For a power of 3, first argument must be below 5"
      );
    });
    it("throws when digit is above 10", () => {
      expect(() => parseDecimal(10, 1)).toThrow(
        "First argument must be an integer from 0 to 9"
      );
    });

    it("throws when either argument is not an integer", () => {
      expect(() => parseDecimal(4.5, 1)).toThrow(
        "First argument must be an integer from 0 to 9"
      );
      expect(() => parseDecimal(4, 1.2)).toThrow(
        "Second argument must be an integer from 0 to 3"
      );
    });
  });

  describe("valid inputs", () => {
    it("converts 0 to empty", () => {
      expect(parseDecimal(0, 0)).toBe("");
    });
    it("converts the 0 in 101 to empty", () => {
      expect(parseDecimal(0, 1)).toBe("");
    });
    it("converts 1 to I", () => {
      expect(parseDecimal(1, 0)).toBe("I");
    });
    it("converts 2 to II", () => {
      expect(parseDecimal(2, 0)).toBe("II");
    });
    it("converts 4 to IV", () => {
      expect(parseDecimal(4, 0)).toBe("IV");
    });
    it("converts the 4 in 40 to XL", () => {
      expect(parseDecimal(4, 1)).toBe("XL");
    });
  });
});
