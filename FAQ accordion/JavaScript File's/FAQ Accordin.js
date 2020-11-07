const questions = document.querySelectorAll('.question h6')
const arrow = document.querySelectorAll('i')

questions.forEach(question => {
    question.nextElementSibling.classList.add('hidden')
    question.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('hover')
        e.currentTarget.nextElementSibling.classList.toggle('hidden')
        e.currentTarget.firstElementChild.classList.toggle('rotate')
    })

    
})




