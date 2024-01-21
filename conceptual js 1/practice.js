// Variables:
// Declare a variable name and assign it your name.
// Create a variable age and set it to your age.
// Declare a constant PI and set it to the value of π (pi).
// Define a variable isStudent and assign it a boolean value.

var name = 'Rial Ahemd';
// var age = 24;
const PI = 3.1416;
var isStudent = true;

// console.log(name, age, PI, isStudent);


// Loops:
// Write a for loop to print numbers from 1 to 10.
// Implement a while loop that counts down from 10 to 1.
// Use a for loop to iterate through an array and log each element.
// Create a loop that prints even numbers from 2 to 20.

// console.log('for loop');
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

let num = 0;
// console.log('while loop');
while (num <= 10) {
    num++;
    console.log(num);
}

let ages = [23, 32, 22, 34, 24];
for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
}
let age = 0;
while (age < ages.length) {
    age++;
    console.log(ages[age]);
}
for (let age of ages) {
    console.log(age);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// Conditions:
// Write an if statement to check if a number is positive.
// Implement a switch statement for days of the week.
// Use a ternary operator to check if a person is eligible to vote.
// Write an if-else statement to determine if a number is odd or even.

let number = 0;
if (number < 0) {
    console.log('this is negative number ');
}
else if (number > 0) {
    console.log('this is a positive number ');
}
else {
    console.log('this is zero');
}
let boyos = 23;
let voter = boyos > 18 ? ' you are eligible to vote  ' : 'you are not eligible to vote  '
console.log(voter);

let num1 = 2;
if (num1 % 2 === 0) {
    console.log('this is an even number');

}
else {
    console.log('this is a odd number');
}

var colors = ['red', 'black', 'blue'];
console.log(colors);
var number3 = [];
let addFirstNumber = number3.push(2);
let addsecondNumber = number3.push(97);
let addthirdNumber = number3.push(44, 32);
let deleteNumber = number3.pop()
console.log(number3);
console.log(number3.indexOf(44));

//Parsing and Formatting:
let cnvrtStr = '25';
let cnvrtint = parseInt(cnvrtStr);
console.log(cnvrtint);
let newCnvrtStr = '3.1416';
let newCnvrtflt = parseFloat(newCnvrtStr);
console.log(newCnvrtflt);
console.log(newCnvrtflt.toFixed(2));

let fltNumber = 5.67;
let intNumber = parseInt(fltNumber)
console.log(intNumber);

let marks = [78, 98, 67, 34];
console.log(marks);
let addlastMarks = marks.push(57);
console.log(marks);
let deleteFirstMark = marks.shift()
console.log(marks);

let addfirstMark = marks.unshift(100)
console.log(marks);
let submarks = marks.slice(1, 3)
console.log(submarks);


