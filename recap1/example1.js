function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true

    }
    else {
        return false
    }

}

let num = isEven(20);
console.log(num);
