// array
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

// length 
let numbersLength = (numbers.length);
console.log(numbersLength);

//get value 
let firstElement = numbers[0];
console.log(firstElement);
let lastElement = numbers[numbers.length - 1];
console.log(lastElement);

// set value 
numbers[0] = 100;
numbers[1] = 200;
numbers[2] = 300;



// push pop
numbers.pop()
numbers.push(700)

// shift unshift 
numbers.shift()
numbers.unshift(9000)
console.log(numbers);
