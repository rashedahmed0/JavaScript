// array distructuring

let colors = ['red', 'blue', 'yellow', 'black'];
let [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

// skip 
let [first, , third, fourth] = colors;
// console.log(first);
// console.log(third);
// console.log(fourth);


// object destructuring
let person = {
    name: 'rial',
    age: 24,
    city: "dhaka"
}
let { name, age, city } = person;
// console.log(name);
// console.log(age);
// console.log(city);

let { name: personName, age: personAge, city: personCity } = person;
console.log(personName);
console.log(personAge);
console.log(personCity);