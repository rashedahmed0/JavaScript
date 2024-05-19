function arraySum(number) {
    let sum = 0;

    console.log(number);
    for (let i = 0; i < number.length; i++) {
        let element = number[i]
        sum += element;

    }
    return sum
}
let age = [1, 2, 3, 4, 5];
let ageSum = arraySum(age)
// console.log(ageSum);


function sumNumber(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        console.log(i);
        sum += i;

    }
    return sum;
}

let number = 15
let numberSum = sumNumber(number);
console.log(numberSum);