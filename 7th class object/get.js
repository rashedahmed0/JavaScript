var shoppingCart = {
    books: 3,
    sunglass: 1,
    keybord: 5,
    mouse: 1,
    pen: 25
}


var penCount = shoppingCart.pen;
// when you know the specific key name , use dot notation to get the key value 

// alternative system
var penCount2 = shoppingCart['pen'];

var properties = Object.keys(shoppingCart)
console.log(properties);

var propertiesValues = Object.values(shoppingCart);
console.log(propertiesValues);


var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
console.log(propertyValue);


// set value 
console.log(shoppingCart);
shoppingCart.books = 50;
shoppingCart['pen'] = 100;
shoppingCart[propertyName] = 200;
console.log(shoppingCart);


