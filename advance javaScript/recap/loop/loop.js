// print 5 number using for loop 
let print = 5;
for (let i = 1; i <= print; i++) {
    console.log(i);
}

// sum 1 to 10 number using loop 
let number = 10;
let sum10 = 0;
for (let i = 1; i <= number; i++) {
    console.log(i);
    sum10 = sum10 + i;

}
console.log('sum 1 to 10 is :', sum10);

// sum array number usnig loop
let arr = [11, 15, 16, 12, 22];
let sumArr = 0;
for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
    sumArr = sumArr + arr[i];
}
console.log('sumArr is :', sumArr);

// reverse array using loop

let arrReverse = [1, 2, 3, 4, 5, 6, 7];
let reverseArray = [];
for (let i = arrReverse.length - 1; i >= 0; i--) {
    let element = arrReverse[i];
    reverseArray.push(element);
}
console.log('the reverse array is :', reverseArray);

// print array number 1 to 10 ;
let evenNumber = 10;
let evenArr = [];
for (let i = 1; i <= evenNumber; i++) {
    let element = i;
    if (element % 2 === 0) {
        evenArr.push(element)
        console.log(element);
    }
}
console.log(evenArr);

// find odd number in an array using loop
let oddArr = [1, 11, 2, 35, 24, 54, 66, 55, 65];
let arrOdd = [];
for (let i = 0; i < oddArr.length; i++) {
    let element = oddArr[i];
    if (element % 2 !== 0) {
        arrOdd.push(element);
    }
}
console.log('find odd number in an array using loop : ', arrOdd);

