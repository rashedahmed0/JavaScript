// numeric array 
let mark = [93, 40, 23, 78, 58];
// array 
console.log(mark);
// length
console.log(mark.length);
// index of 
let indexOf23 = mark.indexOf(23)
console.log(indexOf23);
// index 
let firstMark = mark[0];
console.log(firstMark);
// push
let add22 = mark.push(22);
console.log(mark);
// pop
let delt = mark.pop();
console.log(mark);

for (let i = 0; i < mark.length; i++) {
    console.log(mark[i]);
}
for (let idx of mark) {
    // console.log(idx);
}


