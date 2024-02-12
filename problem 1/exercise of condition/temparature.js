function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
let temparature = 20;
let celsius = celsiusToFahrenheit(temparature);
console.log('fahrenheit = ', celsius);


function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
let fTemparature = 77;
let fahrenheit = fahrenheitToCelsius(fTemparature)
console.log('celsius =', fahrenheit);