let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let [first, second, , fourth, ...rest] = arr
console.log(first);
console.log(second);
console.log(fourth);
console.log(rest);

let obj = {
    name: 'rial',
    age: 23,
    isStudent: true
}
let { name: firstName, age, isStudent } = obj;

console.log(firstName);
console.log(age);
console.log(isStudent);