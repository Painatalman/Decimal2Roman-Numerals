import { convert2Roman } from "./index";

describe("convert to Roman", () => {
  describe("invalid inputs", () => {
    it("throws when it's 0", () => {
      expect(() => convert2Roman(0)).toThrow("Invalid number");
    });
    it("throws when it's negative", () => {
      expect(() => convert2Roman(-1)).toThrow("Invalid number");
    });
    it("throws when it's 5000", () => {
      expect(() => convert2Roman(5000)).toThrow("Invalid number");
    });
    it("throws when it's above 5000", () => {
      expect(() => convert2Roman(5001)).toThrow("Invalid number");
    });
  });
  describe("integers under 5000", () => {
    it("converts 1 to I", () => {
      expect(convert2Roman(1)).toBe("I");
    });
    it("converts 2 to II", () => {
      expect(convert2Roman(2)).toBe("II");
    });
    it("converts 5 to V", () => {
      expect(convert2Roman(5)).toBe("V");
    });
    it("converts 10 to X", () => {
      expect(convert2Roman(10)).toBe("X");
    });
    it("converts 14 to XIV", () => {
      expect(convert2Roman(14)).toBe("XIV");
    });
    it("converts 49 to XLIX", () => {
      expect(convert2Roman(49)).toBe("XLIX");
    });
    it("converts 1987 to MCMLXXXVII", () => {
      expect(convert2Roman(1987)).toBe("MCMLXXXVII");
    });
  });

  describe("decimals", () => {
    it("converts 2.5 to IIS", () => {
      expect(convert2Roman(2.5)).toBe("IIS");
    });

    it("converts 13.5", () => {
      expect(convert2Roman(13.5)).toBe("XIIIS");
    });
  });
});
