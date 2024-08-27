class petson {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    greet() {
        console.log(`hi my name is ${this.name} and i am ${this.age} years old`);
    }

}
let person1 = new petson('rial', 24);
person1.greet()

