class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    speek() {
        console.log(`hy everyOne my name is ${this.name} , and i am ${this.age} years old`);
    }
}
let rial = new Person('rial', 24);
rial.speek()
let rashed = new Person('rashed', 25);
rashed.speek()