// 1) sum 1 to 10 ;
function sum1to10(number) {
    // console.log(number);
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;

    }
    return sum
}
let number = 10;
let numbers = sum1to10(number);
console.log(numbers);

// 2) sum array 
function arrSum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        sum += element;

    }
    return sum;

}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrsum = arrSum(arr);
console.log(arrsum);



//3) find the maximum value 
function maximumValue(arr) {
    // console.log(arr);
    let maximumNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        // console.log(element);
        if (element > maximumNumber) {
            maximumNumber = element;

        }
    }
    return maximumNumber;
}
let maxArr = [1, 5, 2, 4, 6, 34, 6, 33, 99, 34, 64];
let max = maximumValue(maxArr);
console.log(max);


// 4) minimum value 

function minimum(arr) {
    let minimum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element < minimum) {
            minimum = element;

        }

    }
    return minimum;

}
let minimumArr = [2, 3, 7, 8, 54, 24, 1, 4, 5, 744, 7443];
let minimump = minimum(minimumArr);
console.log(minimump);


// 5) even number 

function evenNumber(number) {
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element % 2 === 0) {
            console.log(element);
        }
    }
}
let evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = evenNumber(evenNumbers);


// 6) odd number 
function oddNumber(number) {
    // console.log(number);
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element % 2 !== 0) {
            console.log(element);
        }
    }
}
let oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let odd = oddNumber(oddNumbers);

// 7)rotate array 
function rotateArray(arr) {
    let rotate = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let element = arr[i];
        rotate.push(element);

    }
    return rotate;
}
let rotateArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let rotate = rotateArray(rotateArr)
console.log(rotate);

// 8) intersection in two arrays 

function intersectionArray(arr1, arr2) {
    // console.log(arr1, arr2);
    let intersection1 = arr1;
    let intersection2 = arr2;
    let intersection = [];
    for (let i = 0; i < intersection1.length; i++) {
        let element = intersection1[i];
        if (intersection2.includes(element)) {
            intersection.push(element);
        }
    }
    return intersection;

}
let intersection1 = [1, 2, 4, 5, 6, 8];
let intersection2 = [2, 3, 5, 6, 8, 7, 9];
let ArrayIntersection = intersectionArray(intersection1, intersection2);
console.log(ArrayIntersection);

// 9) factorial number 
function factorialNumber(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;

    }
    return factorial;
}
let FactorialNumber = 5;
let factorial = factorialNumber(FactorialNumber);
console.log(factorial);


// 10) fibonacchi 
function fibonacchiNumber(number) {
    // console.log(number);
    let fibo = [0, 1];
    for (let i = 0; i < number; i++) {
        let fibonacchi = fibo[i - 1] + fibo[i - 2];
        fibo.push(fibonacchi);
    }
    return fibo
}
let FibonacchiNumber = 5;
let fibonacchi = fibonacchiNumber(FibonacchiNumber);
console.log(fibonacchi);