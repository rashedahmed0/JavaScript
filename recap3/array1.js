let Name = ['rial', 'dinar', 'dipti', 'mehedi', 'ruponti'];
// array 
console.log(Name);
// length of array
let arraylength = Name.length
console.log('array length ', arraylength); // array length 

// get value 
let firstName = Name[0];
console.log('first name of this array :', firstName); //  get the first value 

let lastName = Name[Name.length - 1];
console.log(" last name of this array : ", lastName); // get the last value on this array 

// indexof array element
let diptiIndexOf = Name.indexOf('dipti');
console.log('index of dipti  in a array ', diptiIndexOf); // here the index of element name of dipti 

// /set value 
Name[0] = 'rashed'; // reassign new value ;
Name[1] = 'shahed'; // reassign new value ;
Name[2] = 'kulsum'; // reassign new value ;

console.log(Name);

// shit unshit

let addAbburName = Name.unshift('ismail');
console.log(Name);

//Push
let addAmmurName = Name.push('rona');
console.log(Name);

//shift 

let removeFirstName = Name.shift();
console.log(Name);

//pop
let removeLastName = Name.pop();
console.log(Name);


