let student = {
    name: 'rial',
    age: 23,
    cgpa: 3.54,
    isPass: true
}
for (let key in student) {
    console.log("key = ", key, 'value = ', student[key]);
}