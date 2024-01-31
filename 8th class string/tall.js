function maxInArray(number) {
    for (let i = 0; i < number.length; i++) {
        let leargest = number[0];
        const index = i;
        let element = number[index];
        if (element > leargest) {
            leargest = element;
        }
    }
    return leargest;
}


let heights = [189, 160, 134, 200, 155];
let tall = maxInArray(heights);
console.log(tall);
