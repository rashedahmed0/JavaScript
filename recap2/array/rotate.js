function rotate(number) {
    let rotate = [];
    for (let i = number.length - 1; i >= 0; i--) {
        let element = number[i];
        rotate.push(element);

    }
    return rotate;

}
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let num = rotate(number);
console.log(num);