let person = {
    name: 'rial',
    age: 24,
    isStudent: true,
    isMarrid: false
}
console.log(person);
let jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
let objPerson = JSON.parse(jsonPerson)
console.log(objPerson);

let employee = {
    name: 'rashed',
    age: 25,
    isEmployee: true,
    salary: 25000
}
let jsonEmployee = JSON.stringify(employee);
console.log(jsonEmployee);
let objEmp = JSON.parse(jsonEmployee)
console.log(objEmp);