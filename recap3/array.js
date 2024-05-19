let age = [2, 3, 4, 5, 6, 7];
console.log(age);
console.log('lenght of age array ', age.length);
console.log('5 index in age array', age.indexOf(5));
let firstage = age[0];
console.log(firstage);
let secondage = age[1];
console.log(secondage);
let lastAge = age[age.length - 1];
console.log(lastAge);
age[0] = 0;
age[1] = 1;
age[2] = 2;
console.log(age);



let name = ['rial', 'rashehd', 'ahmed', 'ahommod', 'himu'];
// array
console.log(name);
// length
let lenght = age.length;
console.log('length of name array :', lenght);
// index of 
let indexOfahmed = name.indexOf('ahmed');
console.log('index of ahmed in name array ', indexOfahmed);
// get value ;
let firstName = name[0];
console.log(firstName);
let lastName = name[name.length - 1];
console.log(lastName);
let fullName = name[0] + " " + name[2];
console.log(fullName);
// set value 
name[0] = 'rial ahmed';
name[1] = 'rashed ahmed';
console.log('new set array', name);

// push and pop method 

let AddName = name.push('tasnim firdous ');
console.log(name);


//
let removeF = name.shift();
console.log(name); 
