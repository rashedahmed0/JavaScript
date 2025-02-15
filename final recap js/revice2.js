// 1 const let var use
// 2 dynamic string
// 3 default parameter
// 4 arrow function
// 5 spread operator
// 6 skip , rest
// 7 distructuring 

const PI = 3.1416;
let age = 24;
age = 25;
var name = 'rial';
console.log(PI, age, name);

// dynamic string
let mySelf = `hy everyone my  name is ${name} and i am ${age} years old and Thank you everyone`;
console.log(mySelf);

// default parameter
function greet(name = 'rial') {
    let greet = `hello ${name}`;
    return greet;
}
let provideParameter = greet('rashed');
let noProveideParameter = greet();
console.log(provideParameter);
console.log(noProveideParameter);

// arrow function
function add(a, b) {
    return a + b;

}
let sum = add(15, 5);
console.log(sum);

let arrowAdd = (a, b) => a + b;
let arrowSum = arrowAdd(20, 39);
console.log(arrowSum);

// spread operator
let arr = [1, 2, 3, 4, 5, 6, 7];
let copyArr = [...arr, 8, 9];
console.log(copyArr);
console.log(arr);
let [a, b, c] = arr;
console.log(a, b, c);
let [r, s, , t] = arr;
console.log(r, s, t);
let [x, y, ...z] = arr;
console.log(x, y, z);

let employee = {
    name: 'rashed',
    age: 25,
    address: 'dhaka '
}
let { name: names, age: ages, address } = employee;
console.log(names, ages, address);
