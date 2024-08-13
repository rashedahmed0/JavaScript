let color = ['red', 'blue', 'black'];
let [firstColor, secondColor, thirdColor] = color;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

let number = [1, 2, 3, 4];
let [firstNumber, , thirdNumber, fourthNumber] = number
console.log(firstNumber);
console.log(thirdNumber);
console.log(fourthNumber);

let person = { name: 'rial', age: 24 };
let { name: personName, age: personAge } = person
console.log(personName);
console.log(personAge);

let car = { brand: 'toyota', model: 'corolla', year: 2020 };
let { brand: carBrand, model: cardModel } = car;
console.log(carBrand, cardModel);

const user = {
    id: 121,
    info: {
        phone: 0124535,
        email: "rial@gmail.com"
    }
}

let { id, info: { phone: userPhone, email: userEmail } } = user;
console.log(user);
console.log(id);
console.log(userPhone);
console.log(userEmail);
