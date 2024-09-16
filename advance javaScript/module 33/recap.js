let person = {
    name: 'rial',
    age: 24,
    isStudent: true,
    isMarid: false
}
let personJson = JSON.stringify(person)
console.log(person);
console.log(personJson);

let perosnObj = JSON.parse(personJson)
console.log(perosnObj);

