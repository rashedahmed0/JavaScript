const names = 'rial , rashed , dinar , shaHed , dipti , kulsum , ahmed ';
const searchString = 'Shahed';
// const dostExist = names.includes(searchStringLowerCase);
const searchStringLowerCase = searchString.toLowerCase()
const nameLowerCase = names.toLowerCase();
const dostExist = nameLowerCase.includes(searchStringLowerCase);
const dostExistOneLine = names.toLowerCase().includes(searchStringLowerCase)

// console.log(dostExist);
// console.log(dostExistOneLine);


// --------indexOf---------

console.log(names.indexOf('mehedi'));
console.log(names.indexOf('rashed'));


if ('riiyal' !== -1) {
    console.log('this word is founded');
}
else {
    console.log('this word is not founded');
}

console.log(names.startsWith('rial'));