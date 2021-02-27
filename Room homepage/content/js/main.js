'use strict';
const slidData = [
    {
        titel: "Discover innovative ways to decorate",
        desc: "We provide unmatched quality, comfort, and style for property owners across the country Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love",
        img: "../content/assets/image/desktop-image-hero-1.jpg",
    },
    {
        titel: "We are available all across the globe",
        desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        img: "../content/assets/image/desktop-image-hero-2.jpg",
    },
    {
        titel: "  Manufactured with the best materials",
        desc: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        img: "../content/assets/image/desktop-image-hero-3.jpg",
    },
]

// select navbar element 
const navbarlinks = document.querySelector('.navbar-links')
const links = document.querySelectorAll('.link-item');
const toggleBtn = document.querySelector('.toggle-links');
const closeBtn = document.querySelector('.btn-close')
const overLay = document.getElementById('overlay')

toggleBtn.addEventListener('click', ()=>{
    navbarlinks.classList.add('active');
    overLay.classList.add('overlay')
})

closeBtn.addEventListener('click', ()=>{
    navbarlinks.classList.remove('active');
    overLay.classList.remove('overlay')
})


// select slider element 
const sliderBtn = document.querySelectorAll('.slider-btn .btn');
const sliderImg = document.querySelector('.slider-img img');
const sliderTitle = document.querySelector('.slider-content .title');
const sliderDesc = document.querySelector('.slider-content .desc');
let currentItem = 0;
let item = slidData[currentItem];


window.addEventListener('load', () => {
    changeContent()
})


sliderBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.currentTarget.classList.contains('left-btn')){
            currentItem--;
            changeContent ()
        }else if(e.currentTarget.classList.contains('right-btn')){
            currentItem++;
            changeContent ()
        }
    })
})

function changeContent (){
    sliderImg.src = item.img;
    sliderTitle.textContent = item.titel;
    sliderDesc.textContent = item.desc
}



