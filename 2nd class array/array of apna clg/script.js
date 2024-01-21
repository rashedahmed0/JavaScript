let marks = [98, 89, 50, 42, 55];
// array
console.log(marks);
// length
console.log(marks.length);// property

let heros = ['ironman', 'rialman', 'thor', 'hulk', 'superman', 'spiderman'];
heros[0] = 'docter strange'
console.log(heros);
for (let idx = 0; idx < heros.length; idx++) {
    // console.log(heros[idx]);
}
for (let hero of heros) {
    // console.log(hero);
}
for (let hero in heros) {
    console.log(hero);
}