const allSection = document.getElementsByTagName('section');
for (const section of allSection) {
    section.style.border = '2px solid red';
    section.style.padding = '10px';
    section.style.margin = '10px';
    section.style.borderRadius = '10px';
}

const allLi = document.getElementsByClassName('content');
for (const li of allLi) {
    li.style.color = 'red';
    li.style.listStyle = 'none'
}


const firstH1 = document.getElementById('title-1');
firstH1.style.color = 'blue';
const firstH2 = document.getElementById('title-2');
firstH2.style.color = 'yellow';
const firstH3 = document.getElementById('title-3');
firstH3.style.color = 'green';
