const main = document.getElementById('main-container');

const section = document.createElement('section');
section.innerHTML = `
<h1>section title 4</h1>
<ul>
<li>list item1</li>
<li>list item2</li>
<li>list item3</li>
</ul>
`;
main.appendChild(section)


const createUl = document.getElementById('content-list-1');

const createli = document.createElement('li');
li.innerText = ' daynamic li';
createUl.appendChild(createli);
