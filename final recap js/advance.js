// default perameters 
// normal function 
function add(a, b) {

}
add(5, 6);
// default perameters number 
function num(a, b = 0) {
    console.log(a, b);
}
num(4)
function str(a, b = '') {
    console.log(a, b);
}
str('rial');
function arr(a, b = []) {
    console.log(a, b);
}
arr([1, 2, 3, 4]);

function obj(a, b = {}) {
    console.log(a, b);
}

// dynamic string  
let num1 = 10;
let num2 = 5;
console.log(`the som of ${num1} and ${num2} is ${num1 + num2}`);

let firstName = 'rial';
let lastName = 'ahmed';
let fullName = `my full name is ${firstName + lastName}`
console.log(fullName);

// arrow function
let sum = (a, b) => a + b;
let numOfSum = sum(10, 5);
console.log(numOfSum);

let fName = 'rial';
let lName = ' ahmed';
let fullName2 = (firstName, lastName) => firstName + lastName;
let myName = fullName2(fName, lName);
console.log(myName);

let greet = () => 'hello everyOne ';
let greeting = greet();
console.log(greeting);

// spread operator 
let arr1 = [1, 2, 3, 4, 5, 6];
let [a, b, ...c] = arr1;
console.log(a, b, c);
let newArr = [...arr1];
console.log(newArr);
let addArr = [...arr1, 10, 20, 30];
console.log(addArr);
// skip 
let [x, y, , z] = arr1;
console.log(x, y, z);
// rest 
let [r, s, ...t] = arr1;
console.log(r, s, t);

let obj1 = {
    name: 'rial',
    age: 25
};
let { name: personName, age } = obj1;
console.log(personName, age);

let keys = Object.keys(obj1);
console.log(keys);
let values = Object.values(obj1);
console.log(values);
let entires = Object.entries(obj1);
console.log(entires);
