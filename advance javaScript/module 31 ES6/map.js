let nums = [2, 3, 4, 5, 6];
// let double = [];
// type 1
function doubleIt(num) {
    return num * 2;
}
let result = nums.map(doubleIt)
// for (let num of nums) {
//     let boubleIt = num * 2;
//     console.log(boubleIt);
//     double.push(boubleIt)
// }
// console.log(result);


// type 2 
let doubleItArrow = number => number * 2;
let double = nums.map(doubleItArrow);
// console.log(double);


//type 3 
let doubled = nums.map(number => number * 2);
// console.log(double);

// sum all
let sum = 0;
let numSum = nums.map(num => sum += num);
console.log(sum);

// half 

let half = nums.map(num => num / 2);
console.log(half);

// add 5 more 
let add5more = nums.map(x => x + 5);
console.log(add5more);


// square 
let square = nums.map(n => n ** 2);
console.log(square);



let friends = ['rial', 'ahmed', 'rashed', 'ahommod'];
let length = friends.map(frnd => frnd.length);
console.log(length);
let firstLatter = friends.map(frnd => frnd[0]);
console.log(firstLatter);