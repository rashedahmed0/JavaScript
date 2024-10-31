function greet(name, callback) {
    console.log(`hello ${name}`);
    callback()
}

function sayGoodBy() {
    console.log('good bye ');
}



greet('rial', sayGoodBy)

let arr = [1, 2, 3, 4, 5];
let map = arr.map(number => number * 2);
console.log(map);
let foreach = arr.forEach(number => console.log(number * 3))
let filter = arr.filter(number => number % 2 === 0);
console.log(filter);
let find = arr.find(n => n > 3);
console.log(find);

function person(name, age) {
    console.log(`my name is : `, name);
    age()
}
function age() {
    console.log('i am 24 year old');
}
person('rial', age)

function teacher(evrey) {
    console.log(`good morning ${evrey}`);
}
teacher('everyOne');