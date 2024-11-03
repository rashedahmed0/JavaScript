let array = [1, 2, 3];
let [a, b, c] = array;
console.log(a);
console.log(b);
console.log(c);

let obj = { name: 'rial', age: 24 };
let { name: userName, age, ismarid = true } = obj;
console.log(userName);
console.log(age);
console.log(ismarid);