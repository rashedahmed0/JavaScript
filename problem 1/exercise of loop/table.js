function createMultiplicationTable(rows) {

    for (let i = 1; i <= 10; i++) {
        console.log(rows, 'x', i, '=', rows * i);
    }
}

// Example: Create a multiplication table with 5 rows and 5 columns
createMultiplicationTable(5);