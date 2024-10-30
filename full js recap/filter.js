let numbers = [1, 2, 3, 4, 5, 6, 7];
let filterEven = number => number % 2 === 0;
let even = numbers.filter(filterEven);
console.log(even);

let filterOdd = number => number % 2 === 0;
let odd = numbers.filter(filterOdd)
console.log(odd);

let unber4 = (number) => number < 4;
let under = numbers.filter(unber4);
console.log(under);

let upper4 = number => number > 4;
let upper = numbers.filter(upper4);
console.log(upper);