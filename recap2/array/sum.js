function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sum += element;
    }
    return sum;
}
let age = [21, 23, 43, 45];
let sumArray = sumOfArray(age);
console.log(sumArray);
