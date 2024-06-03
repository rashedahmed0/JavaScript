console.log('hello world');

// selector
// getElementByTagName();
const sections = document.getElementsByTagName('section');
// console.log(sections);
for (const section of sections) {
    // console.log(section);
    // style
    section.style.border = '2px solid gray';
    section.style.borderRadius = '10px';
    section.style.margin = '10px';
    section.style.padding = '10px';
}




//getElementsClassName()
const allLi = document.getElementsByClassName('content')
// console.log(allLi);
for (const li of allLi) {
    // console.log(li);
    li.style.listStyle = 'none';
}



// getElementById()
const singleUl = document.getElementById('content-list-2');
// console.log(singleUl)



// querySelector()
const firstLi = document.querySelector('li');
// console.log(firstLi);



// querySelectorAll()
const allSection = document.querySelectorAll('#main-container section');
// console.log(allSection);



// style
const firstHeading = document.getElementById('title1');
firstHeading.style.color = 'red';
const secondHeading = document.getElementById('title2');
secondHeading.style.color = 'blue';
const thirdHeading = document.getElementById('title3');
thirdHeading.style.color = 'green';


// get / set Attribute ;

const secondUlGet = document.getElementById('content-list-2');
// console.log(secondUlGet);
const idValue = secondUlGet.getAttribute('id')
// console.log(idValue);
const classValue = secondUlGet.getAttribute('class');
// console.log(classValue);

const secondUlGetClassLis = secondUlGet.classList;
secondUlGetClassLis.add('bg-red')
secondUlGetClassLis.add('text-center')
secondUlGetClassLis.add('flex')
// console.log(secondUlGetClassLis);
secondUlGetClassLis.remove('bg-red')
// console.log(secondUlGetClassLis);


// children / parent /siblings

const lastUl = document.getElementById('content-list-3');
console.log(lastUl);
const firstLis = lastUl.children[0];
console.log(firstLis.innerText);

const firstchild = lastUl.firstElementChild;
console.log(firstchild.innerText);

const lastLi = lastUl.lastElementChild;
console.log(lastLi.innerText);

const siblingsnext = firstchild.nextElementSibling;
console.log(siblingsnext.innerText);

const siblingsprivios = lastLi.previousElementSibling;
console.log(siblingsprivios.innerText);

const lastLiParent = lastLi.parentElement;
console.log(lastLiParent);


// create append 

const createUl = document.getElementById('content-list-3');
const createLi = document.createElement('li');
createLi.innerText = 'dynamic Li';
createUl.appendChild(createLi);



const mainContainer = document.getElementById('main-container');
const createSection = document.createElement('section');
createSection.innerHTML = `
<h1>dynamic title</h1>
<ul>
<li>dynamic li 1</li>
<li>dynamic li 2</li>
<li>dynamic li 3</li>
<li>dynamic li 34</li>

</ul>
`;
mainContainer.appendChild(createSection);

