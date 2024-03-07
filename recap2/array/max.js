function max(number) {
    let maxValue = number[0];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element > maxValue) {
            maxValue = element;
        }
    }
    return maxValue;

}
let number = [1, 4, 2, 5, 3, 7, 8];
let num = max(number);
console.log(num);