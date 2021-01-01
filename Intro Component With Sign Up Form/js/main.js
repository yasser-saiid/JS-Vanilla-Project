// select form and all inputs

const form = document.getElementById('main-form');
const fristName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
// select all valdation message
const textValdite = document.getElementsByClassName('Warning-text')

window.addEventListener('load', ()=>{
    form.addEventListener('submit' , (e)=>{
        // frist name input valdation
        if(fristName.value == '' || fristName == null || fristName.value.length < 3){
            e.preventDefault();
            fristName.style.borderColor ='#da6666';
            textValdite[0].classList.add('show-Warning-text');
        }
        fristName.addEventListener('focus', ()=>{
            fristName.style.borderColor ='#bdbdbd';
            textValdite[0].classList.remove('show-Warning-text')
            document.getElementById('user-format').textContent = ''
        })
    /*----------------------------------------------------------------------------*/
        // last name input valdation
        if(lastName.value == '' || lastName == null || lastName.value.length < 3){
            e.preventDefault();
            lastName.style.borderColor = '#da6666';
            textValdite[1].classList.add('show-Warning-text');
        }
        lastName.addEventListener('focus', ()=>{
            lastName.style.borderColor ='#bdbdbd';
            textValdite[1].classList.remove('show-Warning-text')
            document.getElementById('user-format').textContent = ''
        })

        /*  frist & last name validate start and contains a letter */
        const userNameFormat = /^[0-9]/gi;
        if(fristName.value.match(userNameFormat) || lastName.value.match(userNameFormat)){
            e.preventDefault();
            document.getElementById('user-format').textContent = 'frist name & last should be start & cotains a latter'
        }
        

/*----------------------------------------------------------------------------*/
    // email input valdation
    const emailValdationMessage = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.value == '' || !email.validity.valid || !emailValdationMessage.test(email.value)){
        e.preventDefault();
        email.style.borderColor = '#da6666';
        textValdite[2].classList.add('show-Warning-text');
    }
    email.addEventListener('focus', ()=>{
        email.style.borderColor = '#bdbdbd';
        textValdite[2].classList.remove('show-Warning-text')
    })

/*----------------------------------------------------------------------------*/
    // password input valdation
        if(password.value == '' || password == null || password.value.length < 8){
            e.preventDefault();
            password.style.borderColor ='#da6666';
            textValdite[3].classList.add('show-Warning-text');
        }
        password.addEventListener('focus', ()=>{
            password.style.borderColor ='#bdbdbd';
            textValdite[3].classList.remove('show-Warning-text')
        })
/*------- -/ ! end valadtion form --------*/
    })
})






