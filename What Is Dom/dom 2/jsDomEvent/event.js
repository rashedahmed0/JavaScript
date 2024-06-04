console.log('hello world');

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


const makeTomatoButton = document.getElementById('make-tomato');
makeTomatoButton.onclick = function makeTomato() {
    document.body.style.backgroundColor = 'tomato';
}

const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}


const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.addEventListener('click', function makePurple() {
    document.body.style.backgroundColor = 'purple'
})


document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})