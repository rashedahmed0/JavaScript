function odd(number) {
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element % 2 !== 0) {
            console.log(element);
        }
    }
}
let number = [1, 3, 2, 6, 7, 8, 9];
odd(number)