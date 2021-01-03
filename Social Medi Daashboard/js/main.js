// select switch button
const switchBtn = document.querySelector('.switch-btn .switch');
// select daashbord container
const dasshboardContainer = document.querySelector('.daashboard-container');

switchBtn.addEventListener('click', function(){
    if(!switchBtn.classList.contains('slider')){
        switchBtn.classList.add('slider')
        dasshboardContainer.setAttribute('data-theme', 'dark');
        
    }else{
        switchBtn.classList.remove('slider')
        dasshboardContainer.removeAttribute('data-theme', 'dark');
    }
})


console.log(dasshboardContainer);