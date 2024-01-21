function factorial(number) {
    let i = number
    let factoSum = 1;
    while (1 <= i) {
        // factoSum *= i ;
        factoSum *= i;
        i--;

    }
    return factoSum;
}
const factorialNumber = factorial(9);
console.log(factorialNumber);
