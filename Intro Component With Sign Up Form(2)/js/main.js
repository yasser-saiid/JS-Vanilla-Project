// select form and all inputs
const form = document.getElementById('form');
const fristName = document.getElementById('FormFirstName');
const lastName = document.getElementById('FormLastName'); 
const email = document.getElementById('FormEmail'); 
const password = document.getElementById('FormPassword');
const confirmPassword = document.getElementById('FormConfirmPassword'); 

// frist name and last name validtion
form.addEventListener('submit', (e)=>{
    const regExpNameFormat = /[^0-9]/gm;
    
    if(fristName.value === '' || lastName.value === '' || !fristName.value.match(regExpNameFormat) || !lastName.value.match(regExpNameFormat)){
        e.preventDefault();
        document.getElementById('name-message').innerHTML = `<i class="fa fa-exclamation-triangle mr-1"></i> frist name and last name can't be emmpty or contains number's only ... lock at our terms !`
    }

    fristName.addEventListener('focus', ()=>{
        document.getElementById('name-message').innerHTML = ``
    })
    lastName.addEventListener('focus', ()=>{
        document.getElementById('name-message').innerHTML = ``
    })
})


// email validation
form.addEventListener('submit', (e)=>{
    const regExpEmailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/ig;
    if(email.value === '' || !email.value.match(regExpEmailFormat)){
        e.preventDefault();
        document.getElementById('email-message').innerHTML = `<i class="fa fa-exclamation-triangle mr-1"></i> please inter a valid email ... lock at our terms !`
    }
})


// password  and confirm password validation 
form.addEventListener('submit', (e)=>{
    const regExpPasswordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(!password.value.match(regExpPasswordFormat)){
        e.preventDefault();
        document.getElementById('password-message').innerHTML = `<i class="fa fa-exclamation-triangle mr-1"></i> password should be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter `
    }else if(password.value !== confirmPassword.value){
        e.preventDefault();
        document.getElementById('confirm-password-message').innerHTML = `<i class="fa fa-exclamation-triangle mr-1"></i> password and confirm password should be same`
    }

    password.addEventListener('focus', ()=>{
        document.getElementById('password-message').innerHTML = ``
    })
    confirmPassword.addEventListener('focus', ()=>{
        document.getElementById('confirm-password-message').innerHTML = ``
    })
})
