const originalString = 'hello world';
const sliceOriginalString = originalString.slice(0, 5);
const substring1 = originalString.substring(0, 5);
console.log('sub', substring1);
console.log(sliceOriginalString);

const phrase = 'javascript is awesome';
const lastWord = phrase.slice(-7);
console.log(lastWord);
const longString = 'This is a very long string.';
const longSlice = longString.slice(5, 19)
console.log(longSlice);

let sentence = "The quick brown fox";
let sentenceSlice = sentence.slice(4)
console.log(sentenceSlice);