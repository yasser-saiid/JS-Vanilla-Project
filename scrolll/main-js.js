// scroll top 
const scrollTop = document.getElementById('scroll-top')

// select navbar element 
const navbarContainer = document.querySelector('.navbar-container')
const navbar = document.querySelector('.nav-links')
const mobailBtn = document.querySelector('.mobail-btn')
const closeBtn = document.querySelector('.close-btn')
const links = document.querySelectorAll('.link')
// open nav links in small scrren
mobailBtn.addEventListener('click', ()=>{
    navbar.classList.add('active');
})
// close nav links remove 
closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
})

window.addEventListener('scroll' , () => {
    if(window.pageYOffset > 120){
        navbarContainer.classList.add('fixed')
    }else{
        navbarContainer.classList.remove('fixed')
    }
})

window.addEventListener('scroll' , () => {
    if(window.pageYOffset > 700){
        scrollTop.style.display = 'block' ;
    }else{
        scrollTop.style.display = 'none';
    }
})

// add and remove class active on links
links.forEach(link => {
    //remove class active on all links
    link.classList.remove('active')
    link.addEventListener('click', (e) => {
        //remove class active other links
        links.forEach(linkItem => {
            if(linkItem !== e.target){
                linkItem.classList.remove('active')
            }
        })


        // add class active on link target
        e.target.classList.add('active')
        
        
        //remove class active -show links-
        navbar.classList.remove('active')
    });
})

// on click scroll up gt to home page
scrollTop.addEventListener('click', () => {
    window.scrollTo(0,0)
    console.log(window.scrollBy);
})

