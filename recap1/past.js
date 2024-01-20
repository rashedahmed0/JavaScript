// overall  js topic

// variable 
var tomatoPrice = 200;
var tomatoPriceStr = '200.734778934';
var floatPrce = parseFloat(tomatoPriceStr);
var digit2Price = floatPrce.toFixed(2);
var intPrice = parseInt(floatPrce);
var nameOfNationalAnimal = 'royal bangal tiger';
var isStudent = true;

//array

var ages = [23, 22, 43, 27, 46];
var firstAge = ages[0];
ages[2] = 10;
var index27 = ages.indexOf(27)
var agesLength = ages.length;


// loop
var number = 0;
while (number < 10) {
    console.log(number);
    number++;
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}



// function
function sum(num1, num2) {
    var addition = num1 + num2;
    return addition;
}


function mul(num1, num2) {
    var multi = num1 * num2;
    return multi;

}

var number = sum(5, 10);
var numbers = mul(5, 10);
console.log(number);
console.log(numbers);


// object 
var mySelf = {
    name: 'rail ahmed',
    age: 23,
    isStudent: true
}