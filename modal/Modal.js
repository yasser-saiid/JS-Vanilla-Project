// selest item modal-bn & modal-overlay & close-btn
const modalBtn = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn');

// add event to open-modal button to add className to overlay div
modalBtn.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal')
})

// add event to close  button to remove className open-modal overlay div
closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal')
})


