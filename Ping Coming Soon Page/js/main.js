// select input and buuton
const inputEmail = document.getElementById('email');
const btnSubmit = document.getElementById('btn-submit')

btnSubmit.addEventListener('click', (e)=>{
    // a regular expression to validate an email address
    const emailRegFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // select vaildation message 
    const validatMessage = document.querySelector('.validat-message')
    if(!inputEmail.value.match(emailRegFormat) || inputEmail.value == ""){
        e.preventDefault();
        validatMessage.innerHTML = `<i class="fa fa-warning mr-1"></i>Please provide a vaild email address..`
        inputEmail.addEventListener('focus', ()=>{
            document.querySelector('.validat-message').innerHTML = ``
        })
    }
})