function sum2digit(a, b) {
    let sum = a + b;
    return sum;
}
let twoNumber = sum2digit(5, 2)
console.log(twoNumber);




function oddNumber(arrNumber) {
    let oddArr = [];
    for (let num of arrNumber) {
        if (num % 2 === 1) {
            oddArr.push(num)
        }
        // else {
        //     console.log('even number is : ', num);
        // }
    }
    // console.log('the odd number are', oddArr);
    return oddArr;

}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let odd = oddNumber(numbers);
console.log('the odd number is : ', odd);

