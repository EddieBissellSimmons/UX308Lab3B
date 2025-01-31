import { convertWindspeedToDescription } from "../convertWindspeedToDescription.js";

describe("text convertWindspeedToDescription", function() {
    it("test miles = 11, knots = 9", function () {
        let miles = 11;
        let knots = 9;
        let description = convertWindspeedToDescription(miles,knots);
        expect(description).toBe("gentle breeze");
    });
    it("test miles = 42, knots = 36", function () {
        let miles = 42;
        let knots = 36;
        let description = convertWindspeedToDescription(miles,knots);
        expect(description).toBe("gale");
    });
});