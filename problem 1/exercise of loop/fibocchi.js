function fibonacchi(number) {
    let fibo = [0, 1];
    for (let i = 2; i <= number; i++) {
        let fibonacchi = fibo[i - 1] + fibo[i - 2];
        fibo.push(fibonacchi);
    }
    console.log(fibo);
}
fibonacchi(10)