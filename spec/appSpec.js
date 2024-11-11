import { Main } from "../src/app.js";


describe("Horloge de Berlin - Ligne des Minutes Simples", function () {

    let main = new Main();
    
    it("devrait éteindre toutes les lampes si les minutes sont 0", function () {

        let result = main.simpleMinutesLine(0);

        expect(result).toEqual("OOOO");
    });

    
});