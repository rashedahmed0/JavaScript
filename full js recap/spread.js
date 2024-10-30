// spread operator 

// copy array
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// console.log('array 1 :', arr1, 'array 2 :', arr2);

// marge array
// let arr3 = [1, 2, 3];
// let arr4 = [4, 5, 6];
// let marge = [...arr3, ...arr4];
// console.log(marge);

// add new 

// let array = [1, 2, 3];
// let newArray = [...array, 10, 20, 30];
// console.log(newArray);

// skip
// let [a, b, , c] = newArray;
// console.log(a, b, c);

// rest 
// let [x, y, ...z] = newArray;
// console.log(x, y, z);


// copy object 
// let obj1 = { name: 'rail', age: 24 };
// let obj2 = { ...obj1 };
// console.log(obj2);

// marge object 
// let obj3 = { name: 'rial' };
// let obj4 = { age: 4 };
// let margeObj = { ...obj3, ...obj4 };
// console.log(margeObj);

// add new 
// let addObj = { ...margeObj, address: 'dhanmondi 15' };
// console.log(addObj);

// let { name: personName, age: personAge, address: personAddress } = addObj;
// console.log(personName, personAge, personAddress);











let array1 = [1, 2, 3, 4];
let copyArray = [...array1];
console.log(copyArray);

let array2 = [5, 6];
let margeArray = [...array1, ...array2];
console.log(margeArray);

let addArray = [...margeArray, 7, 8, 9];
console.log(addArray);

let [a, b, c] = [...addArray];
console.log(a, b, c);
// skip
let [x, y, , z] = [...addArray]
console.log(x, y, z);
//rest

let [r, , s, ...t] = [...addArray];
console.log(r, s, t);

let object = {
    name: 'rial',
    age: 24
}
let copyObject = { ...object };
console.log(copyObject);
let obj1 = { name: 'rial' };
let obj2 = { age: 24 };
let margeObj = { ...obj1, ...obj2 };
console.log(margeObj);
let obj3 = { firstNameame: 'rashed' };
let addObj = { ...obj3, age: 100 };
console.log(addObj);
let person = {
    name: 'rial ahmed',
    age: 24,
}
let { name: personName, age: personAge } = { ...person };
console.log(personName, personAge);
