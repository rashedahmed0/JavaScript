// Question 1: Checking Even or Odd

let number = -23478523;
if (number % 2 === 0) {
    console.log('this is a odd number');
}
else {
    console.log('this is a even number');
}

//Question 2: Grading System
let mark = 35;
if (mark > 80) {
    console.log('A+ grade ');
}
else if (mark > 70 && mark < 80) {
    console.log('A grade ');
}
else if (mark > 60 && mark < 70) {
    console.log('A- grade ');
}
else if (mark > 50 && mark < 70) {
    console.log('B grade ');
}
else if (mark > 40 && mark < 50) {
    console.log('B- grade ');
}
else {
    console.log('You are fail');
}

// Question 3: Temperature Check
let temp = -10;
if (temp > 0) {
    console.log('above freezing');
}
else if (temp < 0) {
    console.log('below freezing');
}
else {
    console.log('equal to freezing');
}

//Question 4: Username Validation

let userName = 'user0535@';
if (userName.length >= 6) {
    console.log('valid user id');
}
else {
    console.log('user name is too short');
}

//Question 5: Positive, Negative, or Zero
let num = -2346;
if (num > 0) {
    console.log('this is positive number');
}
else if (num < 0) {
    console.log('this is negative number ');
}
else {
    console.log('zero');
}


// Question 6: Leap Year

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log(year + " is leap year");
}
else {
    console.log(year + " is not leap year");
}


// Question 7: String Length

let string = 'rial ahmed';
if (string.length > 10) {
    console.log('string has more than 10 characters');
}
else if (string.length < 10) {
    console.log('string has less than 10 character');
}
else {
    console.log('string has equal to 10');
}

//Question 10: Password Strength
let Password = 'Strasdfasong@1';
if (Password.length >= 8 && /[a-z]/.test(Password) && /[A-Z]/.test(Password) && /[1,2,3,4,5,6,7,8,9,0]/.test(Password)) {
    console.log('strong password');
}
else {
    console.log('week password');
}

// Question 15: Check for Adult
const age = 20;
if (age > 18) {
    console.log('person is adult');
}
else {
    console.log('person in not adult');
}


