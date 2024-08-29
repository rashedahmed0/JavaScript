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
let findDepartment = (emp) => emp.department === "Product Development";
let departmentFind = Object.values(employees).find(findDepartment);
// console.log(departmentFind);

// filter 
let salaryFilter = (emp) => emp.salary > 75000;
let filterSalary = Object.values(employees).filter(salaryFilter);
// console.log(filterSalary);
let salary = Object.values(employees).filter((emp) => emp.salary > 80000)
// console.log(salary);

// forEach 
// let forEachPosition = (emp) => console.log(`${emp.position} get ${emp.salary} salary`);
// let PositionForEach = Object.values(employees).forEach(forEachPosition);
// let position = Object.values(employees).forEach((emp) => console.log(`${emp.position} get ${emp.salary} salary`))

// map
let mapId = (emp) => emp.id;
let idMap = Object.values(employees).map(mapId);
// console.log(idMap);
let ID = Object.values(employees).map((emp) => emp.id);
// console.log(ID);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numMap = numbers.map(num => num + 2);
console.log(numMap);
let numForEach = numbers.forEach(num => console.log(num + 5))
let numFilter = numbers.filter(num => num % 2 === 0);
console.log(numFilter);
let numFind = numbers.find(num => num % 2 === 1)
console.log(numFind);
let numReduce = numbers.reduce((previous, current) => previous + current, 0);
console.log(numReduce);

// class 
class Person {
    constructor(name, age, Time) {
        this.name = name;
        this.age = age;
        this.Time = Time;

    }
    speech() {
        console.log(`hello myself ${this.name}and i am ${this.age}`);
    }

    sleep() {
        console.log(`I sleep at ${this.Time} AM.`);
    }
}
let myself = new Person('rial', 24, 12);
myself.speech()
let personSleep = new Person('rial', 24, 12);
personSleep.sleep()