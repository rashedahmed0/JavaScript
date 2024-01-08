function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}
// add(10, 5);
var total = add(10, 20);
console.log('total ', total);

function bringSingara(taka) {
    var singaraPrice = 10;
    var quantity = taka / singaraPrice;

    return quantity;

}
var mytaka = 150;
var getSingara = bringSingara(mytaka);
console.log('singara i can eat : ', getSingara);
