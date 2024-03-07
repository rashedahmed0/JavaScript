// function remove(number) {
//     let remove = [];
//     for (let i = 0; i < number.length; i++) {
//         let element = number[i];
//         if (remove.indexOf(element) === -1) {
//             remove.push(element);

//         }
//     }
//     return remove;
// }
// let number = [1, 2, 2, 5, 3, 1, 6, 4, 4, 9, 5, 8];
// let num = remove(number);
// console.log(num);



function remove(number) {
    let uniqueArray = [];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (uniqueArray.indexOf(element) === -1) {
            uniqueArray.push(element);

        }
    }
    return uniqueArray;
}
let number = [1, 2, 2, 3, 4, 4, 5, 6, 6];
let num = remove(number)
console.log(num);