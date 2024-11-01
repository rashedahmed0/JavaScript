let person = {
    name: 'rial',
    age: 24,
    isStudent: true
}

// console.log(person);
// console.log(person.name);
// console.log(person['age']);
// let student = 'isStudent';
// console.log(person[student]);
person['name'] = 'rashed';
console.log(person);
delete person.age;
console.log(person);

let student = {
    roll: 21,
    department: 'cse',
    campus: 'ideal college'
}

console.log(student);
console.log(student.campus);
console.log(student['department']);
let roll = 'roll'
console.log(student[roll]);

student.campus = 'national univercity',
    console.log(student);

delete student.roll;
console.log(student);