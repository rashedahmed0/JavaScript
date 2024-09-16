function showPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => post(data))
}

showPost()
function post(data) {
    let section = document.getElementById('post-container')
    for (let post of data) {
        console.log(post);
        let div = document.createElement('div');
        div.innerHTML = `
        <h2>id: ${post.id}</h2>
        <h1>title: ${post.title}</h1>
        <h3>userName : ${post.userId}</h3>
        <p>post: ${post.body}</p>
        `;
        section.appendChild(div);
        div.style.backgroundColor = 'aquamarine';
        div.style.padding = '10px';
        div.style.margin = '10px';
    }
}