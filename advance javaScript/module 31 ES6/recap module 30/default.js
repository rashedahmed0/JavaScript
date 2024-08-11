function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}
add(5, 5)

function sum(a, b = 0) {
    let sum = a + b;
    console.log(a, b, sum);
}
sum(5,)

function str(firstName, lastName = " ") {
    let fullName = firstName + lastName;
    console.log(firstName, lastName, fullName);
}
// str('rial', 'ahmed')
str('rial')