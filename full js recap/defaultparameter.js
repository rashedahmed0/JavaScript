function number(a, b = 0) {
    console.log(a, b, a + b);
}
number(10)
function str(name1, name2 = ' ') {
    console.log(name1, name2, name1 + name2);
}
str('rial')

function arr(arr1, arr2 = []) {
    console.log(arr1, arr2, arr1 + arr2);
}
arr([1, 2, 3, 4])

function obj(obj1, obj2 = {}) {
    console.log(obj1, obj2, obj1 + obj2);
}

obj({ name: 'rial', age: 24 })