// for in
let person = {
    name: 'rial',
    age: 24,
    isMarid: false,
    isStudent: true
}
for (let key in person) {
    let values = person[key];
    console.log(key, " : ", values);
}

// for of
let ages = [23, 22, 32, 25, 24];
for (let age of ages) {
    console.log(age);
}
