// children 


const foodContainer = document.getElementById('food-container');
const titleFood = foodContainer.children[0];
console.log(titleFood.innerText);
const ulFood = foodContainer.children[1];
const liFoods = ulFood.children;
const liFood = ulFood.children[2];
for (const liFood of liFoods) {
    liFood.style.color = 'red'
    console.log(liFood.innerText);
}
console.log(liFood.innerText);


// parant 

let parentFood = liFood.parentElement;
console.log(parentFood);