import { Main } from "../src/app.js";


describe("Horloge de Berlin - Ligne des Minutes Simples", function () {

    let main = new Main();
    
    it("devrait éteindre toutes les lampes si les minutes sont 0", function () {

        let result = main.simpleMinutesLine(0);

        expect(result).toEqual("OOOO");
    });

    it("devrait allumer une lampe si les minutes sont 1", function () {

        let result = main.simpleMinutesLine(1);

        expect(result).toEqual("YOOO");
    });

    it("devrait allumer deux lampes si les minutes sont 2", function () {
        let result = main.simpleMinutesLine(2);
        expect(result).toEqual("YYOO");
    });
    
    it("devrait allumer trois lampes si les minutes sont 3", function () {
        let result = main.simpleMinutesLine(3);
        expect(result).toEqual("YYYO");
    });

    
});