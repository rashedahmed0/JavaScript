// spread operator
let arr1 = [1, 2, 3, 5, 6];
let arr2 = [2, 5, 3, 8, 0]

let combine = [...arr1, ...arr2]
console.log(combine);
let copyArr1 = [...arr1];
console.log(copyArr1);


let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combineObj = { ...obj1, ...obj2 }
console.log(combineObj);
let copyObjObj1 = { ...obj1 }
console.log(copyObjObj1);



let numbers = [1, 2, 4, 5];
let sum = (a, b, c, d) => a + b + c + d;
console.log(sum(...numbers));


// 1. Combine Multiple Arrays
let array1 = [2, 4];
let array2 = [5, 6];
let array3 = [7, 8];
let combineArrays = [...array1, ...array2, ...array3];
console.log(combineArrays);


// Copy an Array and Add an Element
let oldArray = [1, 4, 3, 6, 8];
let newArray = [...oldArray];
newArray.push(10);
console.log(newArray);

let arr = [1, 2, 3, 4, 5, 6];
let array = [...arr.slice(1)]
console.log(array);