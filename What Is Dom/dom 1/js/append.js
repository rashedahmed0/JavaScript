// console.log('hello world');
let nameUl = document.getElementById("name-ul");
// console.log(nameUl.innerText);
let nameLi = document.createElement('li');
nameLi.innerText = 'pathan';
nameUl.appendChild(nameLi)


const mainTag = document.getElementById('main-container');
const foodSection = document.createElement('section');
mainTag.appendChild(foodSection);
const ul = document.createElement('ul');
foodSection.appendChild(ul);
const h1 = document.createElement('h1');
h1.innerText = 'fav food';
ul.appendChild(h1);
const li1 = document.createElement("li");
li1.innerText = 'pizza';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'burger';
ul.appendChild(li2)
const li3 = document.createElement("li");
li3.innerText = 'rice bowl';
ul.appendChild(li3);



const dressSection = document.createElement('section');

dressSection.innerHTML = `
<h1>fav dress</h1>
<ul>

<li>t- shrit </li>
<li>shir</li>
<li>pant</li>
<li>panjabi</li>
</ul>

`
mainTag.appendChild(dressSection);