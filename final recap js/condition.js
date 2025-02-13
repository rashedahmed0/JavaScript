// arithmatic operator 
let number = 10;
let number2 = 5;
let add = number + number2;
console.log(add);
let minus = number - number2;
console.log(minus);
let divided = number / number2;
console.log(divided);
let multiple = number * number2;
console.log(multiple);
let modulo = number % number2;
console.log(modulo);

console.log('----------------------');
// assaign operator 
let num = 20;
console.log(num);
num += 10;
console.log(num);
num -= 5;
console.log(num);
num /= 10;
console.log(num);
num *= 5;
console.log(num);



console.log('----------------------');

// logical operator && || 
let nums1 = 10;
if (nums1 > 10) {
    console.log(true);
}
else {
    console.log(false);
}

// grading system 
let point = 80;
if (point >= 80) {
    console.log('a+');
}
else if (point > 69 && point < 80) {
    console.log('a');
}
else if (point > 59 && point < 70) {
    console.log('a-');
}
else if (point > 49 && point < 50) {
    console.log('b');
}
else {
    console.log('fail');
}

// positive negative number 
let number5 = 10;
if (number5 > 0) {
    console.log('positive');
}
else if (number5 < 0) {
    console.log('negative ');
}
else {
    console.log('zero');
};

let checkNumber = (number5 > 0) ? console.log('positive') : (number5 < 0) ? console.log('negative ') : console.log('zero');