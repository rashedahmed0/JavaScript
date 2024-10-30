let arrays = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
for (let array of arrays) {
    sum += array;
    // console.log(array);
}
console.log(sum);

let person = {
    name: 'rial',
    age: 24,
    address: 'dhanmondi 15',

}
for (let key in person) {
    console.log(key, person[key]);
}

