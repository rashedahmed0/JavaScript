class person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    greet() {
        console.log(`hello every one my name is ${this.name}  and i am ${this.age} years old `);
    }
}
let person1 = new person('rial', 24);
person1.greet();
let person2 = new person('rashed', 25);
person2.greet()


class student {
    constructor(departmnet, roll, campus) {
        this.departmnet = departmnet;
        this.roll = roll;
        this.campus = campus;

    }

    about() {
        console.log(`hi everyone i am in ${this.departmnet} . my roll is ${this.roll} and my campus is ${this.campus}`);
    }

}
let student1 = new student('CSE', 5, 'ideal college')
student1.about();

