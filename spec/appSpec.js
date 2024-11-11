import { Main } from "../src/app.js";

describe("Berlin Clock - Simple Minutes Line", function () {
  
    let main = new Main();

  it("should turn off all lamps if minutes are 0", function () {
    expect(simpleMinutesLine(0)).toEqual("OOOO");
  });
  
});
