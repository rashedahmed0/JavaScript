
// object
let person = {
    name: 'rial',
    age: 24,
    isStudent: true
}

// print object 
console.log(person);
// 3 way to print object value 
console.log('first way:', person.age);
console.log('second way :', person['isStudent']);
let student = 'isStudent';
console.log('third way ', person[student]);

//adding new property 
person.gender = 'male';
console.log(person);

// modify an existing property 
person.age = 25;
console.log(person);

delete person.age;
console.log(person);


// nested object 
let employee = {
    name: 'Rashed Ahmed',
    position: 'Developer',
    contact: {
        email: 'rialahmed0@gmail.com',
        phone: '01407707709'
    }
}
console.log(employee);
console.log(employee.position);
console.log(employee['name']);
let contact = 'contact';
console.log(employee[contact]);
employee.address = {
    houseNo: '314',
    road: 'comisioner ln',
    district: 'dhaka'
}
console.log(employee);

// value and keys 

let user = {
    name: 'Rial ahmed ',
    age: 24
}
let keys = Object.keys(user);
let values = Object.values(user);
let entries = Object.entries(user);
console.log(keys);
console.log(values);
console.log(entries);

// object X loop
let rial = {
    name: 'ahmed',
    age: 24,
    roll: 7,
    department: 'cse',
    semester: '5th semester'
}
let rialKeys = Object.keys(rial);
for (let i = 0; i < rialKeys.length; i++) {
    let key = rialKeys[i];
    console.log(key, ':', rial[key]);
}
for (let key in rial) {
    console.log(key, rial[key]);
}
for (let key of Object.keys(rial)) {
    console.log(key, rial[key]);
}
