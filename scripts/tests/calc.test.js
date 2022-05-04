//import your function:
const addition = require("../calc.js");

//describe divide our tests in sections
describe("Calculator", () => {
  describe("Addition function", () => {
    test("Should return 3 for 1 + 2", () => {
      expect(addition(1,2)).toBe(3);
    });
    test("Should return 7 for 3 + 4", () => {
      expect(addition(3,4)).toBe(7);
    });
    test("Should return -3 for -1 + -2", () => {
      expect(addition(-1, -2)).toEqual(-3);
    });
    test("Should be close to 0.3 for 0.1 + 0.2", () => {
      expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
    });
    test("Should throw error if parameters not supplied", () => {
      expect(() => addition()).toThrow(TypeError);
    });
    test("Should throw error for if single parameter supplied", () => {
      expect(() => addition(5)).toThrow(TypeError);
    });
    test("Should throw error for 3 + 'string'", () => {
      expect(() => addition(5 + 'string')).toThrow(TypeError);
    });
  });
  describe("Subtraction function", () => {
    
  });
  describe("Multiplication function", () => {
    
  });
  describe("Division function", () => {
    
  });
});
