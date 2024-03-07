function even(number) {
    let even = [];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element % 2 === 0) {
            even.push(element);
        }
    }
    return even;
}
let number = [1, 2, 3, 5, 6, 8];
let num = even(number);
console.log(num);