// variable 
// number variable 
let number = 23;
// String variable 
let stringNum = '23';
let name = 'rial ahmed';
// boolean variable
let isStudent = true;
let intNumber = parseInt(stringNum);
// console.log(stringNum);
// console.log(intNumber);

// Array
let age = [23, 35, 33, 75, 34, 54];
console.log(age);
let firstAge = age[0];
console.log(firstAge);
age[0] = 10;
let changeFirstAge = age[0]
console.log(age);
let place35 = age.indexOf(35);
console.log(place35);
console.log(age.pop());
console.log(age.push(1000));
console.log(age);

let num = 20;
if (num % 2 === 0) {
    console.log('this is even');
}
else {
    console.log('this is odd number ');
}