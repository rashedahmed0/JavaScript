let text = 'hello world';

// search case 

// 1. includes 
let includesText = 'wor';
console.log(text.includes(includesText));
// length
console.log(text.length);
// 2.indexOf
let indexText = 'wold';
console.log(text.indexOf(indexText));

// slice case 

const sentence = 'coding improve problem-solving and creativity';

// 1. slice 
console.log(sentence.slice(sentence.indexOf('improve'), sentence.indexOf('problem')));
console.log(sentence.slice(7, 14));

// 2. split 
console.log(sentence.split(' ', 5));




