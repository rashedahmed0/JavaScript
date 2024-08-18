// access data
let data = [{ name: "rial", address: 'kochu khet' }];
console.log(data[0].address);

let product = {
    count: 500,
    data: [
        { id: 1, name: 'hp', price: 50000 },
        { id: 2, name: 'lenovo', price: 60000 }
    ]
}
// access seond product name and price ;

console.log('product price is :  ', product.data[1].price, 'and product name is: ', product.data[1].name);

const user = [{
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
        postalCode: {
            zip: "10001",
            plus4: "1234"
        }
    }
}
];
const user1 = [{
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
    }
}
];
console.log(user1[0].address.postalCode?.zip);
console.log(user[0].address.postalCode.zip);