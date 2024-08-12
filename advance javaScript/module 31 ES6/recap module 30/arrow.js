// normal function 
function add(a, b) {
    let sum = a + b;
    return sum;
}
let numbers = add(10, 5);
console.log('normal funtion : ', numbers);

// first change for arrow 
function add2(a, b) {
    return a + b;

}
let numbers2 = add2(5, 2);
console.log('first charge for arrow funtion : ', numbers2);

// arrow function 

let add3 = (a, b) => {
    return a + b;
}
let numbers3 = add3(1, 2);
console.log('arrow function type 1 :', numbers3);

let add4 = (a, b) => a + b;
let numbers4 = add4(5, 4);
console.log('arrow funtion type 2 : ', numbers4);


// sum 
function sum1(num1, num2) {
    return num1 + num2;
}
let twoNumber = sum1(5, 7);
console.log(twoNumber);

// aarrow function 
let sum2 = (num1, num2) => num1 + num2;
console.log(sum2(10, 20));


// check even odd number 
function isEven(number) {
    return number % 2 === 0;
}
console.log('check even odd numbr :', isEven(8));

// arrow function
let isEven2 = (number) => number % 2 === 0;
console.log(isEven2(9));

let greet = (name) => `hello ${name}`;
console.log(greet('rial'));


// get length 

let getLength = (str) => str.length;
console.log(getLength('my name is rial '));

