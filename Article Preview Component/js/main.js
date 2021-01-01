// select share icon and div contains social media
const shareIcon = document.querySelector('.share-icon');
const social = document.querySelector('.social');
// select all social icon
const socialIcons = document.querySelectorAll('.social-icon i')
// add event on cocial icon 
shareIcon.addEventListener('click', ()=>{
    social.classList.toggle('show')
    socialIcons.forEach((socialIcon)=>{
        socialIcon.addEventListener('click', (e)=>{
            if(e.currentTarget.classList.contains('facebook')){
                window.open("https://www.facebook.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=250,width=560,height=700")
            }else if(e.currentTarget.classList.contains('twitter')){
                window.open("https://twitter.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=250,width=560,height=700")
            }else if(e.currentTarget.classList.contains('pinterst')){
                window.open("https://www.pinterest.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=250,width=560,height=700")
            }
        })
    })
})



