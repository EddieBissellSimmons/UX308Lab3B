import { calcVolTriPrism } from "../calcVolTriPrism.js";

describe("test calcVolTriPrism", function() {
    it("test length = 4, height = 15", function () {
        let length = 4;
        let height = 15;
        let volume = calcVolTriPrism(length,height);
        expect(volume.toFixed(2)).toBe("103.92");
    });
});