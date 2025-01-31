import { convertKelvinToFahrenheit } from "../convertKelvinToFahrenheit.js";

describe("test convertKelvinToFahrenheit", function() {
    it("tests 50K", function() {
        let kelvin = 50;
        let fahrenheit = convertKelvinToFahrenheit(kelvin);
        expect(fahrenheit.toFixed(2)).toBe("-369.67");
    });
});