let array = [1, 2, 3, 4];
let arrowarray = (a) => a % 2 === 0;
let awworMap = array.map(arrowarray)
console.log(awworMap);

let map = array.map((arr) => arr * 5)
console.log(map);

// let aroowForEach = array.forEach(arrowarray);
// let forEach = array.forEach((arr) => console.log(arr + 5))

let arrowfilter = array.filter(arrowarray)

console.log(arrowfilter);
let filter = array.find((arr) => arr % 2 === 1)
console.log(filter);


