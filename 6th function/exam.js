// function functionName() {
//     // function body
//     // return
// }
// // function parameter
// let variableName = functionName();


function getTotal(assigment1, assaigment2, assaigment3) {
    let total = assigment1 + assaigment2 + assaigment3;
    let average = total / 3;
    return average;

}

const assaigment1mark = 60;
const assaigment2mark = 58;
const assaigment3mark = 60;
let myAverage = getTotal(assaigment1mark, assaigment2mark, assaigment3mark);
console.log(myAverage);



function add(num1, num2) {
    console.log(num1, num2);
    let sum = num1 + num2
    return sum;

}
let total = add(11, 34)
let total1 = add(24, 43)
let result = add(total1, total);
console.log(result);