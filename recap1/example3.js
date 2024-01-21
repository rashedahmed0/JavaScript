let sum = 1;
for (let i = 1; i <= 5; i++) {
    sum *= i;
}
console.log(sum);

function factorial(number) {

    let factoSum = 1;
    for (let i = 1; i <= number; i++) {
        factoSum *= i
    }
    return factoSum;

}
let factorialNumber = factorial(6)
console.log(factorialNumber);