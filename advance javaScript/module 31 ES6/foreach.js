// let number = [1, 2, 3, 4, 5, 6, 7];
// let sum = 0;
// let result = number.forEach(n => {
//     sum += n;
// });
// console.log(sum);

let numbers = [1, 2, 3, 4, 5, 6];
let dounle = (num) => {
    console.log(num + 5);
}
    ;
let doubleIt = numbers.forEach(dounle);
console.log(doubleIt);


let colors = ['red', 'blue', 'black'];
let colorPrint = (color) => {
    console.log(color);
}
let color = colors.forEach(colorPrint);
