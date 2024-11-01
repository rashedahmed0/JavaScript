function add2numbrs(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let number2 = add2numbrs(5, 2)
console.log(number2);

function sumArray(arr) {
    let element = arr;
    let sum = 0;
    for (let i = 0; i < element.length; i++) {
        sum += element[i];

    }
    return sum;


}
let ages = [1, 2, 3, 4, 5];
let numbers = sumArray(ages)

console.log(numbers);