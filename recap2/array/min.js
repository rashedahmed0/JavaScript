function min(number) {
    let minValue = number[0];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element < minValue) {
            minValue = element;
        }
    }
    return minValue;
}
let number = [4, , 7, 5, 2, 6, 9, 3, 8, 1];
let num = min(number)
console.log(num);