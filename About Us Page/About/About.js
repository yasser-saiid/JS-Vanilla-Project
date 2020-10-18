
const about = document.querySelector('.about-content')
const btns = document.querySelectorAll('.btn-tab')
const contents = document.querySelectorAll('.content')


about.addEventListener('click', (e)=>{
    const idInfo = e.target.dataset.info

    if(idInfo){
        btns.forEach((btn)=>{
            btn.classList.remove('active')
            e.target.classList.add('active')
        })

        contents.forEach((content)=>{
            content.classList.remove('active')
        })

        const element = document.getElementById(idInfo)
        element.classList.add('active')
    }
})
