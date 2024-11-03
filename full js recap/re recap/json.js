let person = {
    name: 'rial',
    age: 24
}

let jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
let ObjPerson = JSON.parse(jsonPerson);
console.log(ObjPerson);

