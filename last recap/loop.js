for (let i = 1; i <= 10; i++) {
    // console.log(i);
}
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    // console.log(element);
}
for (let number of numbers) {
    // console.log(number);
}

let persons = {
    name: 'rial',
    age: 24
}
let keys = Object.keys(persons)
for (let i = 0; i < keys.length; i++) {
    let element = keys[i];

    console.log(element, persons[element]);
}
for (let person in persons) {
    console.log(persons[person]);
}

let number = [1, 2, 3, 4, 5, 7, 8];

let forE = number.forEach((n) => console.log(n));
let forM = number.map(n => n + 2);
console.log(forM);
let forFilter = number.filter(n => n % 2 === 0);
console.log(forFilter);