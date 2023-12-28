for (let i = 1; i <= 5; i++) {
    console.log('apna college');
}
console.log('loop has ended');

// calculae 1 to nth number 

let sum = 0;
for (let i = 1; i <= 6; i++) {
    sum += i;

}
console.log(sum);

// print 1 to 5;
for (let i = 1; i <= 5; i++) {
    console.log('i = ' + i);
}

// Question 1: Sum of Squares
let sum1 = 0;
for (let i = 1; i <= 5; i++) {
    sum1 += i ** 2;

}
console.log(sum1);

// Question 2: Multiplication Table

let number = 5;
console.log(`Multiplication Table ${number}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}


let number2 = 8;
console.log(`multiplication table for ${number2}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number2} * ${i} = ${number2 * i}`);
}

// Question 3: Factorial Calculation
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
    console.log(`factorial of 5 ${factorial}`);
}
console.log(factorial);

let nth = 8;
let factorial2 = 1;
for (let i = 1; i <= nth; i++) {
    factorial2 = factorial2 * i;
    console.log(`factorial of ${nth} ${factorial2}`);
}
console.log(factorial2);


//Question 4: Pattern Printing
let row = '';
for (let i = 1; i <= 5; i++) {
    row += ' $';
    console.log(row);
}


// Question 5: Prime Numbers
