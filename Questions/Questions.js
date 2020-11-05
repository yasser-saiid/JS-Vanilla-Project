// select all btns

/* const btns = document.querySelectorAll('.btn')
btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        e.currentTarget.parentElement.nextElementSibling.classList.toggle('show-text')
        e.currentTarget.classList.toggle('rotate')
    })
}) */


// anthor seluation 
const questions = document.querySelectorAll('.section-center')

questions.forEach(question =>{
    const btn =  question.querySelector('.btn ')
    btn.addEventListener('click', ()=>{
        question.lastElementChild.classList.toggle('show-text')
        btn.classList.toggle('rotate')

        questions.forEach(item =>{
            if(item.lastElementChild !== question.lastElementChild){
                item.lastElementChild.classList.remove('show-text')
            }
        })
    })

    
})