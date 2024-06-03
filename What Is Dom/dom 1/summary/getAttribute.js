// getAttribute

const ul = document.getElementById('content-list-1');
const idValue = ul.getAttribute('id');
console.log(idValue);

const li = document.getElementById('content-id')
const liValue = li.getAttribute('class')
console.log(liValue);




// setAttribute 
// classlist 
const classValue = li.classList;
// console.log(classValue);

// add 
classValue.add('bg-red')
classValue.add('center')
classValue.add('bg-color')
// console.log(classValue);


// remove
classValue.remove('bg-red')
// console.log(classValue);


const element = document.getElementById('content-id');
element.setAttribute('title', 'show the info')