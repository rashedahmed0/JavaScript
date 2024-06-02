// 1 getElementByTagName() 
const titles = document.getElementsByTagName("h1");
for (const title of titles) {
    // console.log(title.innerText);
}

// 2 getElementById()
const tourTitle = document.getElementById('tour-title');
tourTitle.innerText = 'Fav Tour Place';

// 3 getElementsByClass()
const tourPlaces = document.getElementsByClassName('place');
// console.log(tourPlaces);
for (const tourPlace of tourPlaces) {
    // console.log(tourPlace.innerText);
}

// 4 querySelector()

let firstH1 = document.querySelector('main section h1');
console.log(firstH1.innerText);

// 5 querySelectorAll()
let allUls = document.querySelectorAll('main section ul');
// console.log(allUl);
for (const allUl of allUls) {
    console.log(allUl.innerText);
}

