// object 
let person = {
    name: 'rial',
    age: 24,
    isStudent: true,
    isMarid: false

}

console.log(person);
console.log('person name is : ', person.name);
console.log('person age is : ', person['age']);
let student = 'isStudent';
console.log('is person student ? : ', person[student]);

let keys = Object.keys(person)
let values = Object.values(person);
console.log('person objects keys is :', keys);
console.log('person objects values is :', values);

// for is 
for (let key in person) {
    console.log(key, person[key]);
}

// for 
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key, person[key]);
}

// for of 
for (let key of keys) {
    console.log(key, person[key]);
}

// destructure 
let { name, age, isMarid, isStudent } = person
let myName = name;
let myAge = age;
console.log("my name is :", myName);
console.log('my age is : ', myAge);
console.log('marid status ;', isMarid);
console.log('professional status ;', isStudent);



let arr = [1, 2, 3, 4, 45];
// let [first, second, ...rest] = arr
let [first, , third, ...rest] = arr
console.log(first);
// console.log(second);
console.log(third);
console.log(...rest);

function add(num1, num2) {
    return [num1, num2];

}
let [a, b] = add(5, 10);
console.log(a, b);