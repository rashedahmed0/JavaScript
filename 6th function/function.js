// // function declare

// function bringSingara(money) {
//     console.log(`${money} eto takar singara den`);
//     console.log('singara nen');
// }
// let taka = 100
// // bringSingara(taka);

// function add(num1, num2) {
//     console.log('going to add : ', num1, num2);
// }
// // add(10, 20)
// function sum(a, b, c, d, e) {
//     let sum = a + b + c + d + e
//     console.log(a, b, c, d, e);
//     console.log(`sum is : ${sum}`);

// }
// sum(1, 2, 3, 4, 5)   



function add(num1, num2) {
    console.log(num1, num2);
    let sum = num1 + num2;
    // return sum;
    console.log(sum);


}
// add(45, 15)
var total = add(15, 45);
// console.log(total, 'total');

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var singaras = bringSingara(100);
console.log('eating singaras :', singaras);