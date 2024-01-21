var ShoppingItem = {
    books: 5,
    pens: 2,
    beg: 1,
    rubber: 7
}
console.log(ShoppingItem); // object print 

// object value get 


// first method to get value  
console.log(ShoppingItem.rubber);


// second method to get value 
let firstItem = ShoppingItem.books;
console.log(firstItem);


// third method to get value
let secondItem = ShoppingItem['pens'];
console.log(secondItem);

var propertyName = 'beg';
var thirdItem = ShoppingItem[propertyName];
console.log(thirdItem);

// set objec value 

ShoppingItem.books = 100;
ShoppingItem['pens'] = 200;
ShoppingItem[propertyName] = 300;

console.log(ShoppingItem);


// make an array ussing object key
var keys = Object.keys(ShoppingItem);
console.log(keys);

// make an array ussing object values
var values = Object.values(ShoppingItem);
console.log(values);

// print keys and value using for loop
for (let i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = ShoppingItem[propertyName]
    console.log(propertyName, propertyValue);
}


var dinar = {
    name: "dinar",
    age: 34,
    profession: "engineer",
    relationshipSatus: 'single',
}
console.log(dinar); // object print 

var firstDetail = dinar.name; // first type to print value
console.log('name :', firstDetail);

var secondDetail = dinar['age']; // second type to print value 
console.log(secondDetail);

var propertyNameD = 'profession';
var thirdDetail = dinar[propertyNameD];
console.log(thirdDetail); // third type to print value \

// make an array using object keys
var keys = Object.keys(dinar);
console.log(keys);

// make an array using object value 
var values = Object.values(dinar);
console.log(values);


//  loop X object 
for (let i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = dinar[propertyName];
    console.log(propertyName, '=', propertyValue);
}

var dipti = {
    name: 'dipti',
    age: 27,
    relationshipSatus: 'single',
    profession: 'student',
}
console.log(dipti);

var name = dipti.name;
console.log(name);
var age = dipti['age'];
console.log(age);
var relationship = 'relationshipSatus';
var relationshipSatus = dipti[relationship];
console.log(relationshipSatus);

// set value ;
dipti.age = 28;
dipti['profession'] = 'house wife';
dipti[relationship] = 'marid';
console.log(dipti);

// make array use object keys and values 

var keys = Object.keys(dipti);
var values = Object.values(dipti);
console.log(keys, values);

for (let i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = dipti[propertyName];
    console.log(propertyName, propertyValue);
}