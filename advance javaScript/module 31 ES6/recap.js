// 1. var let const 
// 2. default paremeter 
// 3. dynamic string 
// 4. arrow function 
// 5. spread operator or destructuring 


// 1.
var varNumber = 10;
var varNumber = 20;
console.log(varNumber);

let letNumber = 20;
letNumber = 30;
console.log(letNumber);

const constNumber = 40;
console.log(constNumber);

// 2.
function arr(a, b = []) {

}
function obj(a, b = {}) {

}
function number(a, b = 0) {

}
function str(a, b = ' ') {

}

// 3.
let Name = 'rial';
let age = 24;
let introduce = `
hello everyone 
my name is ${Name}
I am ${age} years old
`;
console.log(introduce);


// 4.
let sum = (a, b) => a + b;
let twoNumberSumIs = sum(5, 10);
console.log(twoNumberSumIs);

let square = a => a * a;
console.log(square(5));


// 5.
let { age: myage, a, ...rest } = { a: 1, b: 2, c: 3, name: "rial", age: 23 };
console.log(myage);
console.log(a);
console.log(rest);

let [first, second, , fourth, ...others] = [1, 2, 3, 4, 5, 6, 7]
console.log(first);
console.log(second);
console.log(fourth);
console.log(others);