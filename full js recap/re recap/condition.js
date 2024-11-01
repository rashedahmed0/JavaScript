let number = 89;
if (number % 2 === 0) {
    console.log('this is even number ');
}
else {
    console.log('this is odd number');
}

// in ternary operator 
let oddEven = (number % 2 == 0) ? 'this number is evnt ' : 'this is a odd number ';
console.log(oddEven);

let result = (number > 79) ? 'A+' :
    (number > 69 && number < 80) ? 'A' :
        (number > 59 && number < 70) ? 'A-' : 'fail'

console.log(result);