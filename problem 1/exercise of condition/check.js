function numberCheck(number) {
    if (number > 0) {
        let positive = `${number} is a positive number`;
        return positive;

    }
    else if (number < 0) {
        let negative = `${number} is a negative number `;
        return negative;

    }
    else {
        let zero = `${number} is zero`;
        return zero;
    }
}
let check = 0;
let number = numberCheck(check);
console.log(number);