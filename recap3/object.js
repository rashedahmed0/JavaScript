// // object 
// let shopping = {
//     pen: 5,
//     books: 2,
//     beg: 1,
//     pencil: 2
// }
// console.log(shopping);
// // get value type 1 ;

// let pen = shopping.pen;
// console.log(pen);
// let books = shopping.books;
// console.log(books);
// let beg = shopping.beg;
// console.log(beg);

// // alternative way to get object value ;
// let penCount = shopping["beg"];
// console.log(penCount);
// let booksCount = shopping['books']
// console.log(booksCount);
// let begCount = shopping['beg'];
// console.log(beg);
// let pencil = shopping['pencil'];
// console.log(pencil);


// // make an array using key 
// let properties = Object.keys(shopping);
// console.log(properties);
// //make an array using value 
// let propertiesValue = Object.values(shopping);
// console.log(propertiesValue);


// // another way to get value 
// let propertieName = 'books';
// let propertieValue = shopping[propertieName];
// console.log(propertieValue);
// shopping.pen = 30;
// shopping['beg'] = 30;
// shopping[propertieName] = 30;
// console.log(shopping);



let movie = {
    hero: 'pravas',
    heroin: 'kajal',
    villain: 'allu arjun',
    derector: 'raja moly'
}
let keys = Object.keys(movie);




console.log(movie);

let heroName = movie.hero;
console.log(heroName);
let heroinName = movie['heroin'];
console.log(heroinName);
let villain = 'villain';
let villainName = movie[villain];
console.log(villainName);


let properties = Object.keys(movie);
console.log(properties);
let propertieName = Object.values(movie);
console.log(propertieName);

movie.hero = 'rial';
movie['villain'] = 'rashed';
let heroin = 'heroin';
movie[heroin] = 'sai pallabi';
console.log(movie);



for (let i = 0; i < keys.length; i++) {
    let propertieName = keys[i];
    let propertieValue = movie[propertieName];
    console.log(propertieName, " = ", propertieValue);
}