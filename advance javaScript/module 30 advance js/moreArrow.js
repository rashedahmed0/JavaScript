
// multi parameter 
let minus = (x, y) => x - y;
let minusNumer = minus(10, 4);
console.log('minus between two number : ', minusNumer);

let multiply = (num2, num1) => num1 * num2;
let multiplyNumber = multiply(4, 2);
console.log('multiply two number is : ', multiplyNumber);


//single parameter 
let getAge = (person) => person.age;
let student = { name: 'rial', age: 24 };
let age = getAge(student);
console.log('person age is :', age);

let getThird = number => number[2];
let numbers = [1, 2, 75, 3, 5, 2, 5,];
let third = getThird(numbers);
console.log('third number of array is : ', third);

// no parameter 
let PI = () => Math.PI;
console.log(PI());

let greet = () => 'hello rial';
console.log(greet());



// large parameter 
let large = (a, b, c) => {
    let sum = a + b + c;
    let minus = a - b - c;
    let result = sum * minus;
    return result;


}
let largeNumber = large(10, 5, 2);
console.log(largeNumber);