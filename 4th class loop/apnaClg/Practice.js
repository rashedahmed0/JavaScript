// 1. print all even numbers from 0  to 100
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(' even number is =  ', i);
//         sum += i;
//     }
// }
// console.log('sum is =', sum);

// let i = 1;
// let sum = 0;
// while (i <= 100) {
//     if (i % 2 === 0) {
//         console.log('even number is = ', i);
//         sum += i;
//     }

//     i++;
// }
// console.log('sum is = ', sum);


let gameNumber = 25;
let userNumber = prompt('guess the number : ');

while (userNumber != gameNumber) {
    userNumber = prompt('Your enter the wrong number . guess again : ');

}
console.log('Your guess is correct');

