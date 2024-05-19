// arithmetic operator


let num1 = 5;
let num2 = 2;
let sum = num1 + num2;
console.log(sum);
let minus = num1 - num2;
console.log(minus);
let multiply = num1 * num2;
console.log(multiply);
let devided = num1 / num2;
console.log(devided.toFixed(5));

let squear = num1 ** num2;
console.log(squear);

// assaign operator

let x;
x = 5;
console.log('assaign operator');
// console.log(x);
x = x + 5;
x += 2;
x /= 2;
x **= 2;
x -= 30;
console.log(x);

// if else statement 

let age = 21;
let salary = 750000;

if (salary > 75000 || age > 21) {
    console.log('you can marry ');
}
else {
    console.log('tmr biyer boyos hoy nai');
}


// grading system 
let number = 50;

if (number >= 80) {
    console.log('you got A+');
}
else if (number > 70 && number < 80) {
    console.log('you got A');
}
else if (number >= 60 && number <= 69) {
    console.log("you got A-");
}
else {
    console.log('you are Fail');
}


// leap year check 
let year = 2024;
if (year % 4 === 0) {
    console.log('this year is leapyear ');
}
else {
    console.log('this year is not leapyear');
}