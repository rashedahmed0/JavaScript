// for of
let arrs = [1, 2, 3, 4, 5, 6];
console.log(arrs);
for (let arr of arrs) {
    console.log(arr);
}

// for in 
let objs = {
    name: 'rial',
    age: 23,
    isStudent: true,
    isMarid: false
}

for (let keys in objs) {
    console.log(keys, objs[keys]);
}

