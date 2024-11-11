import { Main } from "../src/app.js";

let main = new Main();

describe("Berlin Clock - Simple Minutes Line", function () {
  it("should turn off all lamps when minutes are 0", function () {
    const result = main.simpleMinutesLine(0);

    expect(result).toEqual("OOOO");
  });

  it("should turn on one lamp when minutes are 1", function () {
    const result = main.simpleMinutesLine(1);

    expect(result).toEqual("YOOO");
  });

  it("should turn on two lamps when minutes are 2", function () {
    const result = main.simpleMinutesLine(2);

    expect(result).toEqual("YYOO");
  });

  it("should turn on three lamps when minutes are 3", function () {
    const result = main.simpleMinutesLine(3);

    expect(result).toEqual("YYYO");
  });

  it("should turn on four lamps when minutes are 4", function () {
    const result = main.simpleMinutesLine(4);

    expect(result).toEqual("YYYY");
  });

  it("should work the same for minutes greater than 4", function () {
    expect(main.simpleMinutesLine(5)).toEqual("OOOO"); // 5 % 5 = 0

    expect(main.simpleMinutesLine(6)).toEqual("YOOO"); // 6 % 5 = 1

    expect(main.simpleMinutesLine(7)).toEqual("YYOO"); // 7 % 5 = 2

    expect(main.simpleMinutesLine(8)).toEqual("YYYO"); // 8 % 5 = 3

    expect(main.simpleMinutesLine(9)).toEqual("YYYY"); // 9 % 5 = 4
  });

  describe("Five Minutes Line", function () {

    it("should turn off all lamps when minutes are 0", function () {
        
      const result = main.fiveMinutesLine(0);

      expect(result).toEqual("OOOOOOOOOOO");
    });
  });
});
