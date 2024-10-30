let array1 = [1, 2, 3, 4, 5, 6];
function doubleIt(numbers) {
    return numbers * 2;

}
let result = array1.map(doubleIt);
console.log(result);

let array2 = [2, 3, 4, 5, 6];
let add5 = arr => arr + 5;
let resultAdd5 = array2.map(add5)
console.log(resultAdd5);

let age = [24, 25, 18, 19];
let add2years = age.map(years => years + 2)
console.log(add2years);

