let array = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9];
let combainArray = [...array, ...array2];
console.log(combainArray);
let copiArray = [...array];
let addArray = [...array, 6, 7, 8];
console.log(addArray);
let [a, b, c] = [...array];
console.log(a);
console.log(b);
console.log(c);
let [x, , z] = [...array];
console.log(x);
console.log(z);
let [r, s, ...t] = [...array];
console.log(r, s, t);

let obj = {
    name: 'rial',
    age: 24
}
let obj2 = {
    name: 'rasehd',
    age: 25
}
let cpiObj = { ...obj };
console.log(cpiObj);
let combainObj = { ...obj, ...obj2 };
console.log(combainObj);

