// way 1 variable declaration without initialization
let x;
console.log(x);
// way 2 accessing non existent object properties 
const obj = {
    name: 'rial',
    age: 24
}
console.log(obj.salary);

// way 3 accessing array element out of bands 
let arr = [1, 2, 3];
console.log(arr[5]);

// function without return statement 

function noReturnt() {
    let a = 1;
}
console.log(noReturnt());


//  explicit assignment 
let y = undefined;
console.log(y);


// function paramenter not passed 
function checkedParam(param) {
    console.log(param);
}

// destructuring non existent properties 
const { a } = {};
console.log(a);


// way to get null

let g = null;
console.log(g);

// let element = document.getElementById('nonExistent');
// // console.log(element);

let data = null;
console.log(data);