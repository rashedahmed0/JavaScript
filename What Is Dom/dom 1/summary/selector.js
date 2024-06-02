// console.log('sector');




// getElementByTagName();
const sections = document.getElementsByTagName('section');
// console.log(sections);
for (const section of sections) {
    // section.style.border = '2px solid red';
    // section.style.margin = '10px';
    // section.style.padding = '10px';
    // section.style.borderRadius = '10px';

};



// getElementsByClassName()
const liContent = document.getElementsByClassName('content');
// console.log(liContent);
for (const li of liContent) {
    // console.log(li);
};


// getElementById();
const ul2 = document.getElementById('content-list-2');
// console.log(ul2);




// querySelector();
const firstLi = document.querySelector('ul .content');
// console.log(firstLi);



// querySelectorAll();
const allUl = document.querySelectorAll('ul');
// console.log(allUl);
for (const ul of allUl) {
    // console.log(ul);
}