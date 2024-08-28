let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numMap = number.map(num => num + 2);
console.log(numMap);
let numForEach = number.forEach(num => console.log('print the number add 5', num + 5));
let numFilter = number.filter(num => num % 2 === 0);
console.log(numFilter);
let numFind = number.find(num => num % 2 === 1);
console.log(numFind);
let numReduce = number.reduce((previous, current) => previous + current, 0)
console.log(numReduce);

