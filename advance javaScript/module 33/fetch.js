// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then(json => console.log(json))

let url = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(url)
//     .then((response) => response.json())
//     .then(josn => console.log(josn))

function loadData() {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}