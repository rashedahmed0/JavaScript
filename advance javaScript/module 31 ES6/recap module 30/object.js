let person = {
    name: 'rial',
    age: 23,
    isMarid: false,
    isStudent: true
};
console.log(person);
console.log(person.age);
console.log(person.name);
console.log(person['isMarid']);


// keys values entries 
let keys = Object.keys(person)
console.log(keys);
let values = Object.values(person);
console.log(values);


let student = {
    name: 'rial',
    age: 24,
    department: 'cse',
    roll: 7
}
for (let key in student) {
    let values = student[key]
    console.log(values);
}

