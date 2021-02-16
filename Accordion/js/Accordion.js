// select items
const dscriptionContainer = document.querySelector('.dscription-container')
const accordionContainer = document.querySelector('.accordion-container')


accordionContainer.addEventListener('mouseover', ()=>{
	accordionContainer.style.width = '70%';
	accordionContainer.style.backgroundColor = '#000000eb';
})
accordionContainer.addEventListener('mouseout', ()=>{
	accordionContainer.style.width = '50%';
	accordionContainer.style.backgroundColor = '#000000c4';
})


const accordionTitle = document.querySelectorAll('.accordion-item .accordion-titel');
accordionTitle.forEach(accordion =>{
	// select all icon in accordion title
	const accordiontext = accordion.nextElementSibling;
	accordion.addEventListener('click', ()=>{
		accordiontext.classList.toggle('show');
		/* whene click in accordion title check if accordion text contains class 
		show is not add this class and remove on all sibling*/
		const textItem = document.querySelectorAll('.accordion-text')
		textItem.forEach(item =>{
			if(accordiontext !== item){
				item.classList.remove('show');
			}
		})
		
	})
}) 


