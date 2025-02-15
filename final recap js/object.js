let mySelf = {
    name: 'rial',
    age: 25,
    isStudent: true,
    address: {
        city: 'dhaka',
        country: 'bangladesh'
    },
};
console.log(mySelf);
console.log(mySelf.name);
console.log(mySelf['age']);
let isStudent = 'isStudent';
console.log(mySelf[isStudent]);

for (let self in mySelf) {
    console.log(mySelf, mySelf[self]);
}
let key = Object.keys(mySelf);
console.log(key);
let value = Object.values(mySelf);
console.log(value);