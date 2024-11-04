let ages = [1, 2, 3, 4, 5, 6, 7];
let [a, b, c] = ages;
console.log(a);
let color = ['red', 'black', 'blue'];
let [firstColor, secondColor, thirdColor] = color;
console.log(firstColor);
console.log(secondColor);

let person = {
    name: 'rial',
    age: 24
}
let { name: personName, age } = person;
console.log(personName);
console.log(age);
