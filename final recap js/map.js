let arr = [1, 2, 3, 4, 5];
function dobleIt(num) {
    return num * 2;
}
let result = arr.map(dobleIt)
console.log(result);

let arr2 = (arr) => arr * 3;
let result2 = arr2(arr);
let map2 = arr.map(arr2);
console.log(map2);

let map3 = arr.map((arr) => arr * 5);
console.log(map3);

let add2 = (arr) => console.log('forEach add 2', arr + 2);;
let forEach = arr.forEach(add2);

let forEach2 = arr.forEach((arr) => console.log('forEach add 5', arr + 5));

let filterArr = arr => arr % 2 === 0;
let filter = arr.filter(filterArr);
console.log(filter);
let filter2 = arr.filter(arr => arr % 2 === 1);
console.log(filter2);

