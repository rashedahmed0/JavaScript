function loadUser2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => showUser(data))
}

function showUser(users) {
    let ul = document.getElementById('list');
    for (let user of users) {
        console.log(user.name);
        let li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);

    }
}