function ageClassifire(age) {
    if (age <= 10) {
        let child = ' you are a child ';
        return child;
    }
    else if (age <= 18 && age > 10) {
        let teenager = 'you are a teenager';
        return teenager;
    }
    else if (age > 18 && age < 40) {
        let adult = 'you are adult ';
        return adult;
    }
    else {
        let old = ' you are old';
        return old;
    }
}
let age = 23;
let checkYourAgeClassifire = ageClassifire(age);
console.log(checkYourAgeClassifire);