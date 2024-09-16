let user = 'https://jsonplaceholder.typicode.com/users';

function loadUser() {
    fetch(user)
        .then(response => response.json())
        .then(data => users(data))
}

function users(data) {
    console.log(data);
}