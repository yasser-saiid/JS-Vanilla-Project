// target navbar element 
const btnToggle = document.querySelector('.nav-toggle');
const btnToggleBars = document.querySelectorAll('.bar');
const navbarLinks = document.querySelector('.nav-links');
const navbarSocialMediaIcone = document.querySelector('.social-meadia');

btnToggle.addEventListener('click', ()=>{
	btnToggleBars.forEach(bar =>{
		bar.classList.toggle('active')
	})
	navbarLinks.classList.toggle('active');
	navbarSocialMediaIcone.classList.toggle('active')
})


// target saidbar elemet
const colseOpenBtn = document.querySelector('.colse-open_btn')
const saidbarContainer = document.querySelector('.saidbar-container')

colseOpenBtn.addEventListener('click', ()=>{
	colseOpenBtn.classList.toggle('active') 
	saidbarContainer.classList.toggle('active')
})