class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // method
    greet() {
        console.log(`hi everyone this is ${this.name} . I am ${this.age} years old`);
    }
}
let person1 = new person('rial', 24);
person1.greet()

class employee {
    constructor(name, age, address, salary) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.salary = salary;
    }

    about() {
        let myself = `hi this is ${this.name} , i am ${this.age} years old and , i live in ${this.address} city , my current salary is ${this.salary}`
        console.log(myself);

    }
}
let employee1 = new employee('rial', 24, 'dhaka', 25000);
employee1.about()
let employee2 = new employee('dinar', 34, 'dhaka', 100000);
employee2.about()


class teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    himSelf() {
        console.log(`my name is ${this.name} , i am ${this.age} years old`);
    }
}
let teacher1 = new teacher('ismail patahan', 68);
teacher1.himSelf();