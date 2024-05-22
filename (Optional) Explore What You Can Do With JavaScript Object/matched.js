let numbers = [2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     console.log(element);
// }


for (let number of numbers) {
    console.log(number);
}

let products = [
    { name: 'poco x3 phone', price: 200000 },
    { name: 'iPhone phone', price: 2600000 },
    { name: 'mi phone', price: 20000 },
    { name: 'one plus phone', price: 70000 },
    { name: 'hp laptop', price: 70000 },
    { name: 'dell laptop', price: 70000 },
    { name: 'lenovo laptop', price: 70000 },
    { name: 'thinkpad laptop', price: 70000 },
    { name: 'mac laptop', price: 70000 },
];
for (let product of products) {
    console.log(product);
}

// function matchedProduct(products, search) {
//     let matched = [];
//     for (let product of products) {

//         if (product.name.includes(search)) {
//             matched.push(product);
//         }
//     }
//     return matched;
// }
// let result = matchedProduct(products, 'phone')
// console.log(result);