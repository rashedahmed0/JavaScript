let arr = [1, 2, 3, 4];
let copyArr = [...arr];
let [a, , ...c] = [...arr]
console.log(a);
// console.log(b);
console.log(c);
// console.log(d);

let obj = { name: 'rial', age: 24 };
let obj2 = { name: "ahemd", age: 25 };
let cpiObj = { ...obj }
let { name: userName, age } = { ...obj };
console.log(userName, age);

// console.log(cpiObj);

let combineObj = { ...obj, ...obj2 };
console.log(combineObj);
