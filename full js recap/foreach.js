let arr = [1, 2, 3, 4, 5, 6];
function print(numbers) {
    // console.log(numbers);
}
let prints = arr.forEach(print);

let doubleIt = number => console.log(number * 2);
// arr.forEach(doubleIt)

let add5 = arr.forEach((number) => console.log(number + 5));
