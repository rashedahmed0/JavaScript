let arrNubmer = [1, 2, 3, 4, 5];
for (let i = 0; i < arrNubmer.length; i++) {
    let element = arrNubmer[i]
    console.log(element);
}

let names = ['emon', 'dipto', 'bayzeed', 'rasehd'];
for (let i = 0; i < names.length; i++) {
    let element = names[i];
    console.log(element);
}

let student = {
    name: 'rial',
    age: 24,
    address: {
        house: 314,
        road: "comussioner ln",
        area: 'danmondi 15'
    },
    cgpa: 3.09
}
console.log(student);
let keys = Object.keys(student);
console.log(keys);
for (let i = 0; i < keys.length; i++) {
    let element = keys[i];
    console.log(element, student[element]);
}
