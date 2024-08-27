// let nums = [2, 3, 4, 5, 6];
// let double = [];
// type 1
// function doubleIt(num) {
//     return num * 2;
// }
// let result = nums.map(doubleIt)
// for (let num of nums) {
//     let boubleIt = num * 2;
//     console.log(boubleIt);
//     double.push(boubleIt)
// }
// console.log(result);


// type 2
// let doubleItArrow = number => number * 2;
// let double = nums.map(doubleItArrow);
// console.log(double);


// type 3
// let doubled = nums.map(number => number * 2);
// console.log(double);

// sum all
// let sum = 0;
// let numSum = nums.map(num => sum += num);
// console.log(sum);

// half

// let half = nums.map(num => num / 2);
// console.log(half);

// add 5 more
// let add5more = nums.map(x => x + 5);
// console.log(add5more);


// square
// let square = nums.map(n => n ** 2);
// console.log(square);



// let friends = ['rial', 'ahmed', 'rashed', 'ahommod'];
// let length = friends.map(frnd => frnd.length);
// console.log(length);
// let firstLatter = friends.map(frnd => frnd[0]);
// console.log(firstLatter);




// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function double(arr) {
//     console.log(arr);
//     let result = arr * 2
//     return result;
// }
// let number = arr.map(double)
// console.log(number);

// let number = [1, 2, 3, 4, 5, 6];
// let bouble = (number) => number + 2;
// let boubleIt = number.map(bouble);
// console.log(boubleIt);

// double 1 
let doubleNumber = [1, 2, 3, 4, 5, 6, 7];
function double(num) {
    let result = num * 2;
    return result;

}
let doubleIt = doubleNumber.map(double);
console.log(doubleIt);

// double 2 
let double2 = (num) => num * 2;
let doubleIt2 = doubleNumber.map(double2);
console.log("double2", doubleIt2);

// doubleIt3 
let double3 = doubleNumber.map((n) => n * 2);
console.log('double3', double3);


// add 5 number 1
let addNumber = [1, 2, 3, 4, 5,];
function add(num) {
    let result = num + 5;
    return result
}
let addIt = addNumber.map(add);
console.log(addIt);


// add 5 number 2 ;
let add2 = (num) => num + 5;
let addit2 = addNumber.map(add2);
console.log(addit2);

// add 5 number 3 
let addit3 = addNumber.map((n) => n + 5);
console.log(addit3);
