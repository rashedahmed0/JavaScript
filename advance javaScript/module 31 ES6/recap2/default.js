function num(a, b) {
    let sum = a + b;
    console.log(a, b, sum);
}
num(5, 10);


function number(a, b = 0) {
    let sum = a + b;
    console.log(a, b, sum);
}
number(7);

function str(firstName, lastName = ' ') {
    let fullName = firstName + lastName;
    console.log(firstName, lastName, fullName);
}
// str('rial', 'ahmed');
str('rial');


function arr(arr1, arr2 = []) {
    let concatArr = arr1 + arr2;
    console.log(arr1, arr2, concatArr);
}
// arr([1, 2, 3], [4, 5, 6]);
arr([1, 2, 3]);


function obj(obj1, obj2 = {}) {
    let concatObj = { ...obj1, ...obj2 };
    console.log(obj1, obj2, concatObj);
}
// obj({ a: 1, b: 2 }, { c: 3, d: 4 });
obj({ a: 1, b: 2 });