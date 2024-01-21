
var shoppingItems = ['books', 'sunglass', 'keybord', 'mouse'];

var friendsAge = [12, 32, 34, 32, 45];
var friendsAge = {
    samad: 23,
    rial: 24,
}
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keybord: 5,
    mouse: 1,
    pen: 25
}

// console.log(shoppingCart);
// console.log(keys);
// const values = Object.values(shoppingCart)
// console.log(values);
const keys = Object.keys(shoppingCart);
for (let i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, "=", propertyValue);

}
