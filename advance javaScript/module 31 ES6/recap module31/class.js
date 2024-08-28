class Person {
    constructor(name, age, time) {
        this.name = name;
        this.age = age;
        this.time = time

    }
    speech() {
        console.log(` hello my self ${this.name} and i am ${this.age} years old`);
    }
    sleep() {
        console.log(`${this.name} is sleep at ${this.time} am`);
    }
}
let myself = new Person('rial', 24, 10);

myself.sleep()
myself.speech();
