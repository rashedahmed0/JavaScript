let numbers = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11];
let evenNumber = (num) => num % 2 === 0;
let even = numbers.filter(evenNumber)
console.log(even);

let positiveNumber = (num) => num > 0;
console.log(numbers.filter(positiveNumber));

let friends = ["rial", "rashed", "ahmed", "emon"];
let longName = friends.filter((name) => {
    return name.length > 4
})
console.log(longName);