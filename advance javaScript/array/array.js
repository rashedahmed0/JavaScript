let fruits = ['apple', 'banana', 'mango'];
console.log(fruits);

// accessing array element 
let firstFruits = fruits[0];
console.log(firstFruits);
let lastFruits = fruits[fruits.length - 1];
console.log(lastFruits);

// modify array element 
fruits[1] = 'blueberry';
fruits[2] = 'lichi'
console.log(fruits);
let age = [24, 22, 23, 21];
console.log(age);

// accessing array element 
let secondAge = age[2];
console.log(secondAge);

// modify array  element 
age[0] = 11;
age[1] = 19;
console.log(age);

// adding and removing element 

age.pop()
console.log('pop', age);
age.push(99);
console.log('push', age);

age.shift()
console.log('shift', age);
age.unshift(100)
console.log('unshift', age);


// loop
for (let i = 0; i < fruits.length; i++) {
    let element = fruits[i];
    console.log(element);
}
for (let furit of fruits) {
    console.log(furit);
}