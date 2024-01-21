// let ages = [23, 34, 43, 65, 34];
// let sum = 0;
// for (let i = 0; i < ages.length; i++) {
//     let age = ages[i]
//     sum = sum + age;
// }
// console.log(sum);



// let whileSum = 0
// let index = 0;
// while (index < ages.length) {
//     whileSum += ages[index];
//     index++;
// }
// console.log(whileSum);

// let oddSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     let age = ages[i];
//     if (age % 2 !== 0) {
//         oddSum += age;
//     }
// }
// console.log(oddSum);

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;

}
let ages = [23, 43, 56, 44, 75];
let age = arraySum(ages);
console.log(age);

function oddArraySum(number) {

    let oddSum = 0;
    for (let i = 0; i < number.length; i++) {

        let mark = number[i];
        if (mark % 2 === 1) {
            oddSum += mark;
        }

    }
    return oddSum
}
let oddMarks = [23, 43, 56, 44, 75];
let marks = oddArraySum(oddMarks)
console.log(marks);
























