let person = {
    name: 'rial',
    age: 24,
    isStudent: true,
    isEmploy: false
}
console.log(person);
console.log(person.age);
console.log(person['name']);
let student = 'isStudent';
console.log(person[student]);

let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
    let element = keys[i];
    console.log(element, person[element]);
}