let student = {
    name: 'rial',
    id: 123,
    address: 'movie cineam',
    isSingle: true,
    friend: ['sahrukh', 'salman', 'amir'],
    car: {
        name: 'tesla',
        ceo: 'elon mask',
        menufacturar: {
            company: 'tesla',
            price: 5000,
            made: 2523
        }
    },
    movie: [{ name: 'no. 1', year: 2012 }, { name: 'king khan ', year: 2014 }],
    act: function act() {
        console.log('acting like sahrukh khan');
    }
};

student.act(); // This will execute the act function and print its output

// console.log(student);
// console.log(student.friend);
// console.log(student['car']);
