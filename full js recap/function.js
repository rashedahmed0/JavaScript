function sumOfNumber(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum += element;
    }
    return sum;
}
let number = [1, 2, 3, 4, 5]
let sum = sumOfNumber(number)
console.log(sum);

function sum2number(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let b = 5;
let a = 2;
console.log(sum2number(a, b));