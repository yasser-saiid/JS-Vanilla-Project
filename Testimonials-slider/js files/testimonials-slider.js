/* all data about every client */
const information = [
    {   
        id:1,
        job: "UX Engineer",
        name: "Tanya Sinclair",
        img:'./img/image-tanya.jpg',
        text: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."
    },

    {
        id:2,
        job: "Junior Front-end Developer",
        name: "John Tarkpor",
        img:'./img/image-john.jpg',
        text: " If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "
    },
]

// select item
const text = document.getElementById('person-text');
const name = document.getElementById('person-name');
const job = document.getElementById('person-job');
const img = document.getElementById('person-img');

// set start item
let currentItem = 0;

// load itit item
window.addEventListener('DOMContentLoaded', ()=>{
    showPerson()
})

// show based person 
function showPerson(){
    const item = information[currentItem];
    text.textContent = item.text;
    name.textContent = item.name;
    job.textContent = item.job;
    img.src = item.img
}

// select next and prev btn
const prevBtn = document.querySelector('.prevuse-btn');
const netxBtn = document.querySelector('.next-btn');

// show prevuse person 
prevBtn.addEventListener('click', ()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = information.length - 1
    }
    showPerson()
})

// show next person 
netxBtn.addEventListener('click', ()=>{
    currentItem++;
    if(currentItem > information.length - 1){
        currentItem = 0
    }
    showPerson()
})
