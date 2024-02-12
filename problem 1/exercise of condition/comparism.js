function numberComparism(a, b) {

    if (a === b) {   // condition to equal
        let equal = `${a} and ${b} are equal`;
        return equal;
    }
    else if (a > b) {  // condition to a grater than b ;
        let grater = `${a} is greater than ${b}`
        return grater;
    }
    else {
        let smaller = `${a} is smaller than ${b}`
        return smaller;
    }
}
let num1 = 15;
let num2 = 7;
let number = numberComparism(num1, num2);
console.log(number);
