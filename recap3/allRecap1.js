// variable


let Name = 'rial';
let age = 24;
let isStudent = true;
let isEmploy = false;

let number = '20.47773947593094';
console.log(number);
let floatNumber = parseFloat(number);
console.log(floatNumber);
let digit3Number = floatNumber.toFixed(3)
console.log(digit3Number);
let intNumber = parseInt(digit3Number);
console.log(intNumber);


// array 

let naikaName = ['alia', 'dalia', 'kalia', 'palia'];
console.log(naikaName);
let naikaLength = naikaName.length;
console.log(naikaLength);
let indexOfKalia = naikaName.indexOf('kalia');
console.log(indexOfKalia);
let firstNaika = naikaName[0];
console.log(firstNaika);
let lastNaika = naikaName[naikaName.length - 1];
console.log(lastNaika);

naikaName[0] = 'nalia'
naikaName[1] = 'chalia';
console.log(naikaName);

let removeFirstItem = naikaName.shift();
console.log(naikaName);
let removeLastItem = naikaName.pop();
console.log(naikaName);

let addLastItem = naikaName.push('alaia');
console.log(naikaName);
let addFirstItem = naikaName.unshift("palia");
console.log(naikaName);

// condition and operator and if else statement 
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log(sum);

let multiply = num1 * num2;
console.log(multiply);

let devided = num1 / num2;
console.log(devided);

let minus = num1 - num2;
console.log(minus);

num1 += 5;
console.log(num1);
num2 -= 5;
console.log(num2);


// leapuear
let year = 2028;
if (year % 4 === 0) {
    console.log('this year is leapyear ');
}
else {
    console.log('this is not a leapyear');
}

// grade systme 
let point = 60;
if (point >= 80) {
    console.log('you got a+');
}
else if (point >= 70 && point < 80) {
    console.log('you got a ');
}
else if (point >= 60 && point < 70) {
    console.log('you got a- ');
}
else {
    console.log('you are fail');
}


// function
function sum1to10(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;

    }
    return sum;
}
let num = 10;
let numbers = sum1to10(num);
console.log(numbers);

function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sum = sum + element;


    }
    return sum
}
let arr = [1, 2, 3, 4, 5, 6];
let array = sumOfArray(arr);
console.log(array);
