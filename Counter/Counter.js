'use strict'

// select all btn 
let btnsManuall = document.querySelectorAll('.btn-manull')
// slect all btn start automatic
let btnAuto = document.querySelectorAll('.btn-auto')
// sapn has value counter
let counterValue = document.querySelector('#value')
//set initial manuall count
let manuallCount = 0




// this for manull count
btnsManuall.forEach(function(btn){
    btn.addEventListener('click', function(e){
        /* 
            1-all class list in all btn your target
            2- function for change counter value maybe increase or decrease
        */
        const btnTarget = e.currentTarget.classList;
        if(btnTarget.contains('decrease')){
            manuallCount--;
        }else if(btnTarget.contains('Increase')){
            manuallCount++;
        }else{
            manuallCount = 0;
        }

        // for chnage color in case decrease or increase
        if(manuallCount > 0){
            counterValue.style.color = '#0f940f'
        }
        if(manuallCount < 0){
            counterValue.style.color = '#d21717'
        }
        if(manuallCount === 0){
            counterValue.style.color = '#222'
        }

        counterValue.textContent = manuallCount
    })
})







// this for auto cont
btnAuto.forEach(function(btn){
    /* 
        1-all class list in all btn your target
        2- function for change counter value maybe increase or decrease
    */
    btn.addEventListener('click', function(e){
        const btnAutoTarget = e.currentTarget.classList;
        











        
    })
}) 



















