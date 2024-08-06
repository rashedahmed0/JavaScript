//  string 
let singleQuoteString = 'hello world';
let doubleQuoteString = "hello world";
let templateLiteralString = `hello world`;
console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(templateLiteralString);


// length of string 
let str = 'hello';
let strLength = str.length;
console.log(`the length of ${str} : `, strLength);


// toUpperCase and toLowerCase 
let strToUpperCase = str.toUpperCase();
console.log(`upper case of ${str} :`, strToUpperCase);
let strToLowerCase = str.toLowerCase();
console.log(`lower case of ${str} : `, strToLowerCase);

// substring 
let strSubstring = str.substring(1, 4);
console.log(`substring of ${str} :`, strSubstring);

// split
let strSplit = str.split('')
console.log(strSplit);

// replace 
let strReplace = str.replace('hello', 'hi')
console.log(strReplace);

// includes 
let strIncludes = str.includes('ell');
console.log(strIncludes);



let firstName = 'Rial';
let lastName = 'Ahmed';
let fullName = firstName + ' ' + lastName;

console.log(fullName);