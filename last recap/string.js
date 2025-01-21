let numberStr = '123,456';
let fruits = 'mango , banana , apple ';
let upperFruits = fruits.toUpperCase()
let lowerFruits = fruits.toLowerCase();
console.log(upperFruits);
console.log(lowerFruits);

// search(indexof , includes , endWith , startWhit)
console.log(numberStr.includes(5));
console.log(numberStr.includes(99));
console.log(numberStr.indexOf(4));
console.log(numberStr.indexOf(9));
console.log(numberStr.startsWith(1));
console.log(numberStr.startsWith(2));
console.log(numberStr.endsWith(6));
console.log(numberStr.endsWith(2));

// split (slice ,split)
console.log(numberStr.slice(1, 3));
console.log(numberStr.split(","));
