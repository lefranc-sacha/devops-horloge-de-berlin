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

    it("should turn on one yellow lamp for 5 minutes", function () {
      const result = main.fiveMinutesLine(5);

      expect(result).toEqual("YOOOOOOOOOO");
    });

    it("should light up four yellow and two red lamps for 30 minutes", function () {
      const result = main.fiveMinutesLine(30);

      expect(result).toEqual("YYRYYROOOOO");
    });
    it("should light up all lamps correctly for 55 minutes", function () {
      const result = main.fiveMinutesLine(55);

      expect(result).toEqual("YYRYYRYYRYY");
    });
  });

  describe("Berlin Clock - Simple Hours Line", function () {
    it("should turn off all lamps for 0 hours", function () {
      const result = main.simpleHoursLine(0);

      expect(result).toEqual("OOOO");
    });

    it("should turn on one lamp for 1 hour", function () {
      const result = main.simpleHoursLine(1);

      expect(result).toEqual("ROOO");
    });

    it("should turn on two lamps for 2 hours", function () {
      const result = main.simpleHoursLine(2);

      expect(result).toEqual("RROO");
    });
    it("should turn on three lamps for 3 hours", function () {
      const result = main.simpleHoursLine(3);

      expect(result).toEqual("RRRO");
    });

    it("should turn on all four lamps for 4 hours", function () {
      const result = main.simpleHoursLine(4);

      expect(result).toEqual("RRRR");
    });
  });

  describe("Berlin Clock - Five Hours Line", function () {
    it("should have no lamps lit for 0 hours", function () {
      const result = main.fiveHoursLine(0);

      expect(result).toEqual("OOOO");
    });

    it("should have one red lamp lit for 5 hours", function () {
      const result = main.fiveHoursLine(5);

      expect(result).toEqual("ROOO");
    });

    it("should have two red lamps lit for 10 hours", function () {
      const result = main.fiveHoursLine(10);

      expect(result).toEqual("RROO");
    });

    it("should have three red lamps lit for 15 hours", function () {
      const result = main.fiveHoursLine(15);

      expect(result).toEqual("RRRO");
    });

    it("should have all red lamps lit for 20 hours", function () {
      const result = main.fiveHoursLine(20);

      expect(result).toEqual("RRRR");
    });
  });

  describe("Berlin Clock - Seconds Lamp", function () {

    it("should be on (Y) for 0 second", function () {

      const result = main.secondsLamp(0); 

      expect(result).toEqual("Y");
    });
    it("should be on (Y) for 2 seconds", function () {

      const result = main.secondsLamp(2); 

      expect(result).toEqual("Y");
    });

    it("should be off (O) for 1 second", function() {

      const result = main.secondsLamp(1);

      expect(result).toEqual("O");
    });

    it("should be off (O) for 3 seconds", function() {

      const result = main.secondsLamp(3);

      expect(result).toEqual("O");
    });
  });
  describe("Berlin Clock - Full Clock", function() {
    it("should display midnight (00:00:00)", function() {
      const result = main.berlinClock(0, 0, 0);
      expect(result).toEqual("Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });
    it("should display 12:10:11", function() {
      const result = main.berlinClock(12, 10, 11);
      expect(result).toEqual("O\nRROO\nRROO\nYYOOOOOOOOO\nOOOO");
    });
    it("should display 23:59:59", function() {
      const result = main.berlinClock(23, 59, 59);
      expect(result).toEqual("O\nRRRR\nRRRO\nYYRYYRYYRYY\nYYYY");
    });
    
  });
});
