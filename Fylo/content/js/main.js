// select navbar element 
const navContainer = document.getElementById('nav-container')
const mobailMenu = document.getElementById('mobail-menu')
const navMenu = document.querySelector('.nav-menu')

// to add class name to navbar to change background n scroll
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 90){
        navContainer.classList.add('active')
    }else if(window.scrollY < 90){
        navContainer.classList.remove('active')
    }
})

// add event to hide and show navbar menu  in media screen medium
mobailMenu.addEventListener('click', function(e){
    const bars = document.querySelectorAll('.bar')
    bars.forEach(bar => {
        bar.classList.toggle('active')
    })
    navMenu.classList.toggle('active')
})

// create function to open img target in poupup div overlay
let imgCell = document.querySelectorAll('.img-cell');
let getLatestImgOpen;
let windowWidth = window.innerWidth;

imgCell.forEach((img,index)=>{
    img.addEventListener('click', ()=>{
        getLatestImgOpen = index + 1;
        //create new div container an image and append this in body
        let container = document.body;
        let newImgOpen = document.createElement('div');
        newImgOpen.setAttribute('class', 'new-img_open');
        newImgOpen.setAttribute('onclick', 'closeWindow()');
        container.appendChild(newImgOpen);

        // get clone an img click and append in newPicOpen
        let itemCellImg = img.firstElementChild.cloneNode();
        newImgOpen.appendChild(itemCellImg);
        itemCellImg.classList.remove('img-cell-item');
        itemCellImg.classList.add('popup-img');
        itemCellImg.setAttribute('id', 'current-img')

        //create next and prev btn
        itemCellImg.addEventListener('load', ()=>{
            //next button
            let nextBtn = document.createElement('button')
            nextBtn.innerHTML = `>>`;
            nextBtn.setAttribute('class', 'next-btn');
            nextBtn.setAttribute('onclick', 'changeImg(1)')
            //prev button
            let prevBtn = document.createElement('button');
            prevBtn.innerHTML = `<<`;
            prevBtn.setAttribute('class', 'prev-btn');
            prevBtn.setAttribute('onclick', 'changeImg(0)')
            // add buttons in body
            container.appendChild(nextBtn);
            container.appendChild(prevBtn)
        })
    })
}) 


function closeWindow() {
    document.querySelector('.new-img_open').remove();
    document.querySelector('.next-btn').remove();
    document.querySelector('.prev-btn').remove();
}

function changeImg(){
    console.log('change');
}




