// number 
function add(a, b) {
    let sum = a + b;
    console.log(a, b, sum);
}
add(5, 10);
// number default funtion parameter 
function add2(a, b = 0) {
    let sum = a + b;
    console.log(a, b, sum);
}

add2(2)


// string 
function str(firstName, lastName) {
    let fullName = firstName + lastName;
    console.log(firstName, lastName, 'full name is :', fullName);
}
str('rial', 'ahmed')

// string default function parameter 
function str2(firstName, lastName = '') {
    let fullName = firstName + lastName;
    console.log(firstName, lastName, 'full name is : ', fullName);
}
str2('rashed')

// array 
function arr(arr1, arr2) {
    console.log(arr1, arr2);
}
arr([1, 3, 5], [2, 4, 6]);

// array default function parameter 
function arr2(arr1, arr2 = []) {
    console.log(arr1, arr2);
}
arr2([1, 2, 3, 4, 5, 6]);

// object 
function obj(obj1, obj2) {
    console.log(obj1, obj2);
}
let friend1 = {
    name: 'rial',
    age: 'dosnt matter'
}
let friend2 = {
    name: 'rashed',
    age: 24
}
obj(friend1, friend2);


// object default function parameter
function obj2(obj1, obj2 = {}) {
    console.log(obj1, obj2);
}
let friend3 = {
    name: 'ahmed',
    age: 24
}
obj2(friend3);