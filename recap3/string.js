let numberStr = '1 , 2 , 3'
console.log(numberStr);
let intNumber = parseFloat(numberStr)
console.log(intNumber);
let fruitStr = 'mango';


// case method 
let fruit = 'mango';
let upperFruit = fruit.toUpperCase();
console.log(upperFruit, fruit);
let Name = 'RIAL';
let lowerName = Name.toLowerCase();
console.log(Name, lowerName);

// search method 
let sentence = 'always belive yourself';
let sectenceInclude = sentence.includes('belive');
console.log(sectenceInclude);
let sectenceIndexOF = sentence.indexOf("yourself");
console.log(sectenceIndexOF);
let sentenceEnd = sentence.endsWith('yourself');
console.log(sentenceEnd);
let sentenceStart = sentence.startsWith('yourself');
console.log(sentenceStart);

// slice method 
let fruitArr = 'mango , banana , apple . pinapple . coconut - lichi';
let fruitSplit = fruitArr.split(' ')
console.log(fruitSplit);
let fruitSlice = fruitArr.slice(0, 5)
console.log(fruitSlice);
let fruitSubSrting = fruitArr.substring(5, 15)
console.log(fruitSubSrting);

let flower = '     rose     '
let flowerTrim = flower.trim()
let flowerTrimEnd = flower.trimEnd()
let flowerTrimStart = flower.trimStart()
console.log(flower);
console.log(flowerTrim);
console.log(flowerTrimEnd);
console.log(flowerTrimStart);
