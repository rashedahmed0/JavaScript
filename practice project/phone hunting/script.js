// 1st step to fetch with async and await for arrow function to fetch data ;
let loadPhone = async (phone, isShowAll) => {  // here use async for using arrow function with phone and isshowall parementer ;
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`) // here fetch data and await use for arrow funtion 
    let data = await res.json(); //  here res file contberto json file and use await for arrow function 
    let mobile = data.data;
    // console.log(mobile);
    showPhone(mobile, isShowAll) // here passs  the mobile and isshow all argument 
}
let showPhone = (phones, isShowAll) => { // here phones and is show all peremeter 
    let phoneContainer = document.getElementById('phone-container'); // here we put the phone container ner 
    phoneContainer.innerText = ' '; // here the set phone container innertext

    let showBtn = document.getElementById('show-all'); // here the show btn variable create by id 

    if (phones.length > 6 && !isShowAll) {  // here if phones length is greater then 6 then 
        showBtn.classList.remove('hidden');  // then show btn classlist remove the hidden class 
    }
    else {
        showBtn.classList.add('hidden'); // other wise add hidden
    }

    if (!isShowAll) { //  here if is  show all 
        phones = phones.slice(0, 6); // 
    }

    phones.forEach(phone => { // here we use foreach for loop the phones 
        console.log(phone);
        let div = document.createElement('div'); // here create the div element 
        div.classList = 'card bg-base-100 w-96 shadow-xl'; // here set the classlist 
        div.innerHTML = ` 
             <figure class="px-10 pt-10">
                    <img src="${phone.image}" alt="Shoes"
                        class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>There are many variations of passages of available, but the majority have suffered</p>
                    <p  class="text-xl font-bold">$999</p>
                    <div class="card-actions">
                        <button class="btn btn-primary" onclick="showDetails('${phone.slug}');my_modal_4.showModal()">Show Details</button>
                    </div>
                </div>
        
        `; // here add the dynamic  
        phoneContainer.appendChild(div)
    });
}
// 2nd part to search 
let mobileSearch = (isShowAll) => { // isShowalll is paremeter of showallbutton function;
    // console.log('button clicked');
    let inputField = document.getElementById('input-field');
    let inputValue = inputField.value;
    // console.log(inputValue);
    loadPhone(inputValue, isShowAll) // here pass the input value and isshowall arugemnt
}

//3rd step to show all button 
let showAllButton = () => { // here make a arrow function showallbutton 
    mobileSearch(true)  // here pass the ture argument i n mobile search function

}

// 4th step to show details of phone 
let showDetails = async (slug) => {
    // console.log(slug);
    let res = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
    let data = await res.json();
    let details = data.data;
    console.log(details);

    showPhoneDetails(details)


}
let showPhoneDetails = (details) => {
    let image = document.getElementById('image');
    image.src = `${details.image}`;
    let title = document.getElementById('title');
    title.innerText = `${details.name}`;
    let description = document.getElementById('description');
    description.innerText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
    let Storage = document.getElementById('Storage');
    Storage.innerText = `${details.mainFeatures.storage}`;
    let Display = document.getElementById('Display');
    Display.innerText = `${details.mainFeatures.displaySize}`;
    let Chipset = document.getElementById('Chipset');
    Chipset.innerText = `${details.mainFeatures.chipSet}`;
    let Memory = document.getElementById('Memory');
    Memory.innerText = `${details.mainFeatures.memory}`;
    let Slug = document.getElementById('Slug');
    Slug.innerText = `${details.slug}`;
    let Release = document.getElementById('Release');
    Release.innerText = `${details.releaseDate}`;
}