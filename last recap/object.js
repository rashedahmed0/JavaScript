let person = {
    name: 'rial',
    age: 24
};
console.log(person);
console.log(person.age);
let name = 'name';
console.log(person['name']);
console.log(person[name]);
person.name = 'rashed';
person.age = 25;
console.log(person);

let key = Object.keys(person);
console.log(key);
let value = Object.values(person);
console.log(value)
