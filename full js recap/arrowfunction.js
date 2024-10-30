function sum1(a, b) {
    return a + b;

}
let number1 = sum1(5, 2);
console.log(number1);
// arrow function 
let sum2 = (a, b) => a + b;
let number2 = sum2(3, 9);
console.log(number2);

function message1(message) {
    console.log(message);
}
message1('lets make something big')

let message = message => console.log(message);
message('lets make some history')



function filterEven(number) {
    let element = number;
    if (element % 2 === 0) {
        console.log(element);
    }
}
let arr = [1, 3, 4, 5];
let numbers = filterEven(arr)
