// function intersection(number1, number2) {
//     console.log(number1, number2);
//     let intersection = [];
//     for (let i = 0; i < number1.length; i++) {
//         let element = number1[i];
//         if (number2.includes(element)) {
//             intersection.push(element);
//         }
//     }
//     return intersection;
// }
// let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let number2 = [2, 4, 6, 8, 10];
// let num = intersection(number1, number2);
// console.log(num);


function intersection(number1, number2) {
    let intersection = [];
    for (let i = 0; i < number1.length; i++) {
        let element = number1[i];
        if (number2.includes(element)) {
            intersection.push(element);
        }
    }
    return intersection;

}

let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let number2 = [1, 3, 5, 7, 9, 11];
let num = intersection(number1, number2);
console.log(num);
