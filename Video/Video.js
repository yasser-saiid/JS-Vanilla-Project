// select btn and video

const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")
const heading = document.querySelector(".heading")


btn.addEventListener('click', ()=>{
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause()
    }else{
        btn.classList.remove('slide')
        video.play()
    }
})


// preloaded 
/* const preLoader = document.querySelector('.pre-load')
window.addEventListener('load', ()=>{
    preLoader.classList.add('hide-preloader')
}) */
