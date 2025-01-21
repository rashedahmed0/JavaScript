// function name(firstName, lastName) {
//     let fullName = firstName + lastName;
//     return fullName;
// }
// let fullName = name('rial', ' ahmed');
// console.log(fullName);

// let fullName = (firstName, lastName) => firstName + lastName;
// let name = fullName('rashed', ' ahmed');
// console.log(name);

let greet = (name) => 'hello ' + name;
function fullName(firsName, lastName,) {
    let fullName = firsName + lastName;
    return greet(fullName)
}

let name = fullName('rial', 'ahmed');


console.log(name);



let number = [1, 2, 3, 4, 5, 6, 7];

let forE = number.forEach(n => {
    let num2add = n + 2;
    // console.log(num2add);
})
let forM = number.map((n) => n + 2)
console.log(forM);

let forFilter = number.filter(n => n % 2 === 0);
console.log(forFilter);
