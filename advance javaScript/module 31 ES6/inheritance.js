class animal {
    constructor(name) {
        this.name = name;
    }
    speek() {
        console.log(`${this.name} make noise`);
    }
}

class dog extends animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speek() {
        console.log(`${this.name} breed barks`);
    }
}
let myDog = new dog('rex', 'german shepherd')
myDog.speek()



class Vehicles {
    constructor(name, seat) {
        this.name = name;
        this.seat = seat;
    }
    start() {
        console.log(`${this.name} start at 8am`);
    }
}
class Car extends Vehicles {
    constructor(name, seat, model) {
        super(name, seat);
        this.model = model;

    }
    start() {
        console.log(`${this.name} start at 9pm . this car have ${this.seat} and model name of this car is ${this.model}`);
    }
}
let myCar = new Car('toyota', 4, 'xCorolla');
myCar.start()