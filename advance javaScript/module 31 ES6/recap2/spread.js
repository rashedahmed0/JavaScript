// spread operator 

// array 
// let numbers = [1, 2, 3, 4, 5, 6];
// let copyNumber = [...numbers];
// copyNumber.push(10);
// console.log(copyNumber);
// console.log(numbers);

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let allNum = [...num1, ...num2]
console.log(allNum);

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 3 };
let allObj = { ...obj1, ...obj2 }
console.log(allObj);