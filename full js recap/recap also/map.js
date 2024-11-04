let arr = [1, 2, 3, 4, 5];
let arrow = (a) => a % 2 === 0;
// let arrowMap = arr.map(arrow)
// console.log(arrowMap);
// let map = arr.map((a) => a * 3);
// console.log(map);

// let arrowForEach = arr.forEach(arrow);
// let forEach = arr.forEach(a => a + 10)
// console.log(forEach);

// let arrowFilter = arr.filter(arrow);
// console.log(arrowFilter);
// let filter = arr.filter(a => a % 2 === 1);
// console.log(filter);

let find = arr.find(a => a % 2 === 1)
console.log(find);

