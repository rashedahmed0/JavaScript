console.log('hello dom basi');
// console.log(document.body);
// let student = {
//     name: 'rial',
//     age: 24,
//     id: 1432,
//     study: function (time) {
//         console.log(time, 'study kortase ');
//     }
// }

let liCollection = document.getElementsByTagName('li')
// console.log(liCollection);
for (const li of liCollection) {
    // console.log(li.innerText);
}
let allHeading = document.getElementsByTagName('h1');
for (const hi of allHeading) {
    // console.log(hi.innerText);
}
// getElementById()
let placeId = document.getElementById('places-title');
placeId.innerText = 'my tour place';

// getElementsByClassName();
let placesClass = document.getElementsByClassName("imp-place");
for (const place of placesClass) {
    // console.log(place);  // Access and print text content only
    // console.log(place.innerText);  // Access and print text content only
};


// querySelectorAll();
let someLi = document.querySelectorAll('body li');

console.log(someLi);
for (const placeLi of someLi) {
    console.log(placeLi.innerText);
}


// querySelector()
let firstLi = document.querySelector('body .imp-place');
console.log(firstLi.innerText);













let sections = document.querySelectorAll("section");
for (const section of sections) {

    section.style.border = '2px solid red';
    section.style.padding = "10px";
    section.style.marginBottom = "10px";
    section.style.borderRadius = "10px";

}

let places = document.getElementById("tour-container");
// places.style.backgroundColor = 'red';
// places.style.color = 'white'
places.classList.add('bg-red')
places.classList.add('center-text')
places.classList.remove('large-text')










