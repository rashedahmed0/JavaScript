const employees = {
    employee1: {
        id: "E001",
        position: "Software Engineer",
        department: "IT",
        salary: 75000,
        address: {
            road: "5th Avenue",
            district: "Dhaka",
            ln: "LN-123"
        }
    },
    employee2: {
        id: "E002",
        position: "Data Analyst",
        department: "Finance",
        salary: 65000,
        address: {
            road: "7th Street",
            district: "Chittagong",
            ln: "LN-456"
        }
    },
    employee3: {
        id: "E003",
        position: "HR Manager",
        department: "Human Resources",
        salary: 80000,
        address: {
            road: "12th Road",
            district: "Sylhet",
            ln: "LN-789"
        }
    },
    employee4: {
        id: "E004",
        position: "Marketing Specialist",
        department: "Marketing",
        salary: 70000,
        address: {
            road: "Main Street",
            district: "Khulna",
            ln: "LN-101"
        }
    },
    employee5: {
        id: "E005",
        position: "Accountant",
        department: "Finance",
        salary: 60000,
        address: {
            road: "Park Lane",
            district: "Rajshahi",
            ln: "LN-202"
        }
    },
    employee6: {
        id: "E006",
        position: "Product Manager",
        department: "Product Development",
        salary: 90000,
        address: {
            road: "Green Road",
            district: "Barishal",
            ln: "LN-303"
        }
    }
};
// find 
let positionFind = (emp) => emp.position === "Product Manager";
let findPosition = Object.values(employees).find(positionFind);
console.log(findPosition);
// console.log(employees);
// filter 
let salaryFilter = (emp) => emp.salary > 70000;
let filterSalary = Object.values(employees).filter(salaryFilter)
// console.log(filterSalary);
let salary = Object.values(employees).filter((emp) => emp.salary > 80000);
// console.log(salary);
// forEach
// let positionForEach = Object.values(employees).forEach((emp) => console.log(`${emp.position} has ${emp.salary} salary`));
// map 
let idMap = (emp) => emp.id;
let mapId = Object.values(employees).map(idMap);
// console.log(mapId);
let idmap = Object.values(employees).map((emp) => emp.id);
// console.log(idmap);