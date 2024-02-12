// function isPrime(number) {
//     for (let i = 2; i <= number / 2; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// // Example: Check if 7 is a prime number
// let result = isPrime(6);
// console.log(result);  // Output: true




function isPrime(number) {
    for (let i = 2; i < number / 2; i++) {
        if (number % 2 === 0) {
            let notPrime = 'this is  not a prime number ';
            return notPrime;
        }

    }
    let thisPrime = 'this is a prime number';
    return thisPrime;
}
let number = isPrime(6);
console.log(number);