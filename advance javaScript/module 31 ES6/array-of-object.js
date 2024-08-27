let products = [
    { id: 1, name: 'lenovo', price: 45000 },
    { id: 2, name: 'samsung', price: 50000 },
    { id: 3, name: 'iphone', price: 150000 },
    { id: 4, name: 'mi', price: 25000 }
]
//map
let name = products.map((p) => p.name);
console.log(name);
//forEach
let price = products.forEach((p) => console.log(p.price));
// filter 
let expansive = products.filter((p) => p.price > 45000)
console.log(expansive);
// find 
let affordable = products.find((p) => p.price < 100000);
console.log(affordable);

