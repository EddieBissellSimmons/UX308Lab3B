//function that **converts** *kelvin* to *fahrenheit*

function convertKelvinToFahrenheit(kelvin){
    let fahrenheit = (kelvin-273.15)*9/5+32;
    return fahrenheit;
}

export {convertKelvinToFahrenheit}