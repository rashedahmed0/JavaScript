const tourSection = document.getElementById("tour-container");
console.log(tourSection.innerHTML);
const idValue = tourSection.getAttribute('id');
console.log(idValue);

const tourUl = document.getElementById('tour-list');
// console.log(tourUl);
const tourUlIdVlaue = tourUl.getAttribute('id');
// console.log(tourUlIdVlaue);
const tourClassValue = tourUl.getAttribute('class')
// console.log(tourClassValue);
const tourClassValueList = tourUl.classList;

console.log('befor remove the bg-red class', tourClassValueList);
tourUl.classList.remove('bg-red');
console.log('after remove the bg-red class ', tourClassValueList);
console.log('befor add the display-flex class', tourClassValueList);
tourUl.classList.add('bg-blue')
console.log('befor add the bg-blue class', tourClassValueList);


