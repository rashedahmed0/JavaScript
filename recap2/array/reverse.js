function reverse(number) {
    let reverse = []
    for (let i = number.length - 1; i >= 0; i--) {
        let element = number[i];
        reverse.push(element)
    }
    return reverse;
}
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let num = reverse(number);
console.log(num);
