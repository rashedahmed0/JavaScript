let arr = [1, 2, 3, 9, 3, 7, 4, 8,];
let max = 0;
for (let num of arr) {
    if (num > max) {
        max = num;
    }
}
console.log(max);