// select some element for switch mode 
const mainContainer = document.querySelector('.main-container');

// selet element for switch light and dark mode
const lightMode = document.querySelector('.light');
const darkMode = document.querySelector('.dark');


lightMode.addEventListener('click', ()=>{
    lightMode.style.opacity = 1;
    darkMode.style.opacity = 0.3;
    mainContainer.removeAttribute('data-theme', 'dark')
    document.getElementsByTagName('hr')[0].style.backgroundColor = '#090f2f'
    document.getElementsByTagName('hr')[1].style.backgroundColor = '#090f2f'
    document.querySelector('.main-heading').style.color = '#727272'
})

darkMode.addEventListener('click', ()=>{
    darkMode.style.opacity = 1;
    lightMode.style.opacity = 0.3;
    mainContainer.setAttribute('data-theme', 'dark')
    document.getElementsByTagName('hr')[0].style.backgroundColor = '#e5e8eb'
    document.getElementsByTagName('hr')[1].style.backgroundColor = '#e5e8eb' 
    document.querySelector('.main-heading').style.color = '#dc3545'
})

// select client-testimonial div contains img and script 
const clientTestimonial = document.querySelector('.client-testimonial')
// select all img for every client 
const clientImg = document.querySelectorAll('.client-img')
// select all clent testimonials text div 
const clentText = document.querySelectorAll('.content-text')

clientTestimonial.addEventListener('click', (e)=>{
    const idPerson = e.target.dataset.person
    
    if(idPerson){
        clientImg.forEach((img)=>{
            img.classList.remove('active')
            e.target.classList.add('active')
        })

        clentText.forEach((text)=>{
            text.classList.remove('active')
        })

        const textElment = document.getElementById(idPerson)
        textElment.classList.add('active')
    }
})