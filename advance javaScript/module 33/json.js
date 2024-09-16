const perosn = { name: 'rial', age: 24, isStudent: true };
const stringified = JSON.stringify(perosn);
console.log(stringified);
console.log(perosn);


let shop = {
    owner: 'rial',
    address: {
        road: "comussionar ln",
        houseno: 314,
        district: "dhaka"
    },
    product: ['laptop ', 'mobile ', 'computer'],
    isOpen: true

}
console.log(shop);
let shopJSON = JSON.stringify(shop)
console.log(shopJSON);

let shopObj = JSON.parse(shopJSON)
console.log(shopObj);