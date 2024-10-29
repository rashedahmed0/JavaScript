let arr1 = [1, 2, 3, 4];
// print array
console.log(arr1);
// length of array
let lengthOfArr1 = arr1.length;
console.log(lengthOfArr1);
// get single array value 
let firstNum1 = arr1[0];
console.log(firstNum1);
let lastNum1 = arr1[arr1.length - 1];
console.log(lastNum1);
// set value 
arr1[0] = 100;
arr1[1] = 200;
console.log(arr1);

// index of 
let indexOf3 = arr1.indexOf(3);
let indexOf100 = arr1.indexOf(100)
console.log(indexOf3);
console.log(indexOf100);

// push pop

arr1.pop()
console.log(arr1);
arr1.push(400)
console.log(arr1);

// shift unshift 
arr1.shift()
console.log(arr1);
arr1.unshift(1);
console.log(arr1);