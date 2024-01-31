function reverseString(strng) {
    let newString = '';

    for (let i = strng.length; i >= 0; i--) {
        let element = strng[i];
        newString += element;

    }
    return newString
}
let str = 'i hate you';
let reverse = reverseString(str)
console.log(reverse);