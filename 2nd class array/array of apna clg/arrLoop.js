let heros = ['ironman', 'rialman', 'thor', 'hulk', 'superman', 'spiderman'];
heros[0] = 'docter strange';
console.log(heros);
// for loop
for (let idx = 0; idx < heros.length; idx++) {
    // console.log(heros[idx]);
}

// for of loop
for (let hero of heros) {
    console.log(hero);
}

// for in loop
for (let hero in heros) {
    console.log(hero);
}