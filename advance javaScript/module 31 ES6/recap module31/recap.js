// const students = {
//     student1: {
//         id: "S001",
//         class: "10",
//         roll: "15",
//         department: "Science",
//         cgpa: 3.8
//     },
//     student2: {
//         id: "S002",
//         class: "12",
//         roll: "10",
//         department: "Commerce",
//         cgpa: 3.6
//     },
//     student3: {
//         id: "S003",
//         class: "11",
//         roll: "5",
//         department: "Arts",
//         cgpa: 3.9
//     }
// };

// // get student info
// function getStudentInfo(id) {
//     for (let keys in students) {
//         if (students[keys].id === id) {
//             return students[keys];
//         }
//     }
// }
// let info = getStudentInfo('S003');
// console.log(info);

// // update cgpa 

// function updateCGPA(id, cgpa) {
//     for (let key in students) {
//         if (students[key].id === id) {
//             students[key].cgpa = cgpa;
//             return students[key];
//         }
//     }
// }
// let cgpa = updateCGPA('S003', 4.00);
// console.log(cgpa);



const students = {
    student1: {
        id: "S001",
        class: "10",
        roll: "15",
        department: "Science",
        cgpa: 3.8,
        address: {
            road: "5th Avenue",
            district: "Dhaka",
            ln: "LN-123"
        }
    },
    student2: {
        id: "S002",
        class: "12",
        roll: "10",
        department: "Commerce",
        cgpa: 3.6,
        address: {
            road: "7th Street",
            district: "Chittagong",
            ln: "LN-456"
        }
    },
    student3: {
        id: "S003",
        class: "11",
        roll: "5",
        department: "Arts",
        cgpa: 3.9,
        address: {
            road: "12th Road",
            district: "Sylhet",
            ln: "LN-789"
        }
    },
    student4: {
        id: "S004",
        class: "10",
        roll: "8",
        department: "Science",
        cgpa: 3.7,
        address: {
            road: "Main Street",
            district: "Khulna",
            ln: "LN-101"
        }
    },
    student5: {
        id: "S005",
        class: "12",
        roll: "20",
        department: "Commerce",
        cgpa: 3.5,
        address: {
            road: "Park Lane",
            district: "Rajshahi",
            ln: "LN-202"
        }
    },
    student6: {
        id: "S006",
        class: "11",
        roll: "12",
        department: "Arts",
        cgpa: 4.0,
        address: {
            road: "Green Road",
            district: "Barishal",
            ln: "LN-303"
        }
    }
};

// find 
let rollFind = (student) => student.roll === '10';
let roll = Object.values(students).find(rollFind);
console.log(roll);
// filter 
let cgpaFilter = (student) => {
    student['cgpa'] > 3.7
    return student.cgpa
};
let cgpa = Object.values(students).filter(cgpaFilter);
// console.log(cgpa);
let filterCgpa = Object.values(students).filter((student) => student['cgpa'] > 3.8);
// console.log(filterCgpa);




// map
let studentId = (student) => student['id'];
let id = Object.values(students).map(studentId);
// console.log('type 1', id);

let studentId2 = Object.values(students).map((student) => student["id"]);
// console.log('type 2', studentId2);

let studentClass = (student) => student['class'];
let Class = Object.values(students).map(studentClass);
// console.log('type 1 ', Class);
let studentClass2 = Object.values(students).map((student) => student['class']);
// console.log('type 2 ', studentClass2);



// forEach

// let studentDepartment = (student) => console.log(`${student['id']} is in the ${student['department']}`);
// let department = Object.values(students).forEach(studentDepartment);
// let studentDepartment2 = Object.values(students).forEach((student) => console.log(`${student['id']} is in the ${student['department']} departmet`));




