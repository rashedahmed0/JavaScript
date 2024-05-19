// variable 
let myName = 'Rial Ahmed';
let myAge = 24;
let isStudent = true;

let strNumber = '345.89873947';
let floatNumber = parseFloat(strNumber);
// console.log(floatNumber);
let toFixedNumber = floatNumber.toFixed(3);
// console.log(toFixedNumber);
let intNumber = parseInt(toFixedNumber);
// console.log(intNumber);


// array
let naikaName = ['alia', 'dalia', 'kalia', 'malia'];
let naikaNameLength = naikaName.length;
console.log(naikaNameLength);

let firstNaika = naikaName[0]; // get value 
let lastNaika = naikaName[naikaName.length - 1]; // get value 
console.log(firstNaika, lastNaika);


console.log(naikaName);
naikaName[0] = 'nalia' // set value
naikaName[1] = 'talia' // set value
// console.log(naikaName);
console.log(naikaName.indexOf('malia'));

let addlast = naikaName.push('alia'); // push pop shift unshift 
let addfirst = naikaName.unshift('jamila'); // push pop shift unshift 
// console.log(naikaName);
let removeLast = naikaName.pop(); // push pop shift unshift 
let removefirst = naikaName.shift(); // push pop shift unshift 
// console.log(naikaName);

let sliceNaika = naikaName.slice(2)// slip slice 
// console.log(sliceNaika);





// condition

let num1 = 5;
let num2 = 2;
let sum = num1 + num2;
let multiply = num1 * num2;
let minus = num1 - num2;
let devided = num1 / num2;
console.log(sum, minus, devided, multiply);
// re assign operator 
let x = 5;
x = x + 3;
x += 5;
x *= 2;
x /= 3;
x -= 2;
console.log(x);


// if else statement 

let year = 2029; // leapyear check

if (year % 4 === 0) {
    console.log('this year is leapyear');
}
else {
    console.log('this year is not leapyear');
}

let num = 9;     //odd or even number check ;
if (num % 2 === 0) {
    console.log('this is a even number ');
}
else {
    console.log('this is a odd number');
}


let number = 89;  // grade check 
if (number >= 80) {
    console.log('you got A+');
}
else if (number >= 70 && number < 80) {
    console.log('you got A');
}
else if (number >= 60 && number < 70) {
    console.log('you got A-');
}
else if (number >= 50 && number < 60) {
    console.log('you got B');
}
else {
    console.log('you are fail');
}


// loop 
let index = 1;
while (index <= 10) {
    console.log(index);
    index++;
}

for (let i = 1; i < 10; i++) {
    console.log(i);
}


let sum1to10 = 0;
for (let i = 0; i < 10; i++) {
    sum1to10 += i;

}
console.log(sum1to10);


let sumArray = [1, 7, 2, 3, 9, 10, 4, 5, 6, 8];
let sumArr = 0;
for (let i = 0; i < sumArray.length; i++) {
    let element = sumArray[i];
    sumArr = sumArr + element;

}
console.log(sumArr);


// function
function odd(arr1) {
    // console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
        let elemnet = arr1[i];
        if (elemnet % 2 !== 0) {
            console.log(elemnet);
        }

    }
}
let arr1 = [1, 2, 3, 4, 5, 6]
let oddNumber = odd(arr1);



function even(arr2) {
    for (let i = 0; i < arr2.length; i++) {
        let element = arr2[i];
        if (element % 2 === 0) {
            console.log(element);
        }
    }
}
let arr2 = [1, 2, 3, 4, 5, 6];
let evenNumber = even(arr2);


// object

let mySelf = {
    Name: 'rial',
    age: 24,
    isStudent: true,
}
console.log('----------------------');
let Keys = Object.keys(mySelf);
for (let i = 0; i < Keys.length; i++) {
    let key = Keys[i]
    let value = mySelf[key];
    console.log(key, value);
}
console.log(mySelf);

// get value 
let Name = mySelf.Name;
let Age = mySelf['age'];
let student = 'isStudent';
let IsStudent = mySelf[student];
console.log(Name);
console.log(Age);
console.log(IsStudent);

mySelf.Name = 'rashed'
mySelf['age'] = 25;
mySelf[student] = false;
console.log(mySelf);

console.log(Keys);

let Values = Object.values(mySelf);
console.log(Values);


// string
let str = 'never give. up  you. can do it ';

// search method 
let splitStr = str.split('.');
console.log(splitStr);
let sliceStr = str.slice(6, 10)
console.log(sliceStr);
let endStr = str.endsWith('never');
let startStr = str.startsWith('never');
console.log(endStr, startStr);
let includeStr = str.includes('up');
let indexofStr = str.indexOf('you');
console.log(includeStr, indexofStr);
let substringStr = str.substring(6);


console.log(substringStr);