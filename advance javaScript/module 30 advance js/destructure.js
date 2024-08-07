//object 
let person = {
    name: 'rial',
    age: 24,
    department: 'cse',
    CGPA: 4.54
}
let { name, age, department, } = person;
console.log(name);
console.log(age);
console.log(department);

let employee = {
    position: 'web developer',
    salary: 50000,

}
let { position, salary } = employee;
console.log(position);
console.log(salary);


// array 
console.log('number1');
let number1 = [1, 2, 3, 4, 56];
let [first, second, third, fourth] = number1;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


console.log('number2');
let number2 = [1, 2, 3, 4, 5, 6, 7];
let [st1, , rd3, th4] = number2;
console.log(st1);
console.log(rd3);
console.log(th4);





