const sections = document.querySelectorAll("section");
// console.log(sections);

for (const section of sections) {
    section.style.border = '2px solid red';
    section.style.margin = '10px';
    section.style.padding = '10px';
    section.style.borderRadius = '10px';
    section.style.textAlign = 'center';

}
const lis = document.querySelectorAll('li');
for (const li of lis) {
    li.style.color = 'blue';
    li.style.listStyle = 'none';
}

