import { Main } from "../src/app.js";

describe("Berlin Clock - Simple Minutes Line", function () {
    let main = new Main();
    
    it("should turn off all lamps when minutes are 0", function () {
        let result = main.simpleMinutesLine(0);
        expect(result).toEqual("OOOO");
    });
    
    it("should turn on one lamp when minutes are 1", function () {
        let result = main.simpleMinutesLine(1);
        expect(result).toEqual("YOOO");
    });
    
    it("should turn on two lamps when minutes are 2", function () {
        let result = main.simpleMinutesLine(2);
        expect(result).toEqual("YYOO");
    });
    
    it("should turn on three lamps when minutes are 3", function () {
        let result = main.simpleMinutesLine(3);
        expect(result).toEqual("YYYO");
    });
    
    it("should turn on four lamps when minutes are 4", function () {
        let result = main.simpleMinutesLine(4);
        expect(result).toEqual("YYYY");
    });
});