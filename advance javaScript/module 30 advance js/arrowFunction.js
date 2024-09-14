// function add(a, b) {
//     let sum = a + b;
//     return a + b;

// }

function add(a, b) {
    return a + b;
}
let numbers = add(5, 6);
console.log(numbers);


// function expression 
let add2 = function (a, b) {
    return a + b;

}
// arrow function
let add3 = (a, b) => a + b;
let jog3 = add3(2, 4);
console.log(jog3);



// normal function 
function greet() {
    return 'hello rial'
}
let greets = greet();
console.log(greets);


// arrow function 
let arrowGreet = () => 'hello rial';
let arrowGreets = arrowGreet();
console.log('arrow function :', arrowGreets);


// normal  function 

function squar(n) {
    let squars = n * n;
    return squars;
}
let fSquar = squar(4);
console.log('normal function :', fSquar);


// arrow funtion 
let arrowSquar = (n) => n * n;
let arrowSquars = arrowSquar(5);
console.log('arrow function : ', arrowSquars);


let add5 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
let sum5 = add5(2, 3, 4, 5)
console.log('add5 sum is : ', sum5);

let multiply = (num1, num2) => num1 * num2;
let multiplySum = multiply(2, 5);
console.log('multiply of two number is : ', multiplySum);
