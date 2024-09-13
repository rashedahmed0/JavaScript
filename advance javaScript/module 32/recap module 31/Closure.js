function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());
const secondServer = kitchen()
console.log(secondServer());


function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }

}
let watch1 = stopWatch();
console.log(watch1);
let watch2 = stopWatch()
console.log(watch2);
console.log(watch2);
console.log(watch2);
console.log(watch2);

function timer() {
    let time = 0;
    return function () {
        time += 1;
        return time
    }
}
let time1 = timer();
console.log(time1());
console.log(time1());
console.log(time1());
let time2 = time