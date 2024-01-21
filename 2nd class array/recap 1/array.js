let age = [23, 24, 21, 20, 22, 25];
// array
console.log(age);
// index 
let firstAge = age[0]
let lastAge = age[age.length - 1];

console.log(firstAge);
console.log(lastAge);

//set value 
age[0] = 1;
console.log(age);

// push 
let add = age.push(0);
console.log(age);
// pop
let delt = age.pop();
console.log(age);
console.log(age.length);


let heros = ['ironman', 'supperman', 'batman', 'spiderman', 'hulk'];

for (let idx = 0; idx < heros.length; idx++) {
    console.log(heros[idx]);
}
let marks = [99, 74, 83, 33, 45];

for ()