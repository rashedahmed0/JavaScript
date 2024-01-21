let mark = [89, 53, 45, 66, 24];
console.log(mark);
// index
let firstMark = mark[0];
let lastMark = mark.length - 1
console.log(firstMark);
console.log(lastMark);

// set value 
mark[0] = 20;
console.log(mark);

// place 
let PlaceOf45 = mark.indexOf(45);
console.log(PlaceOf45);

//length 
console.log(mark.length);

//push
let addNewMark = mark.push(33);
console.log(mark);

// pop 
let deleteMark = mark.pop()
console.log(mark);



// Question 1: Sum of Array Elements

const array = [1, 2, 3, 4, 5,];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(sum);

// Question 2: Largest Number in Array
let Number = [10, 5, 26, 8, 16];
let maxNumber = Number[0];

for (let i = 0; i < Number.length; i++) {
    if (Number[i] > maxNumber) {
        maxNumber = Number[i]
    }
}
console.log(maxNumber);

// /Question 3: Array Reversal
let Elements = ['apple', 'mango', 'banan', 'orange', 'grape'];
let ReversalArray = []
for (let i = Elements.length - 1; i >= 0; i--) {

}
// Question 5: Even Numbers
let Numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumber = [];
let oddNumber = [];

for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] % 2 === 0) {
        evenNumber.push(Numbers[i]);
    }
    else {
        oddNumber.push(Numbers[i])
    }
}
console.log(evenNumber);
console.log(oddNumber);

