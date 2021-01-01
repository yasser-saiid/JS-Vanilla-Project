const TistimonialsContent = [
    {
        id:1,
        name:'Anna Deynah',
        star:'<i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star grey-text"> </i><i class="fa fa-star grey-text"> </i>',
        job:'Founder at ET Company',
        img:'https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg',
        text:'officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.'
    },

    {
        id:2,
        name:'John Doe',
        star:'<i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i>',
        job:'Front-end Developer in NY',
        img:'https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg',
        text:'Duis aute irure dolor in  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },

    {
        id:3,
        name:'clark Aston',
        star:'<i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star grey-text"> </i>',
        job:'Photographer at Studio LA',
        img:'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg',
        text:'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore'
    },

    {
        id:4,
        name:'Maria Kate',
        star:'<i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star blue-text"> </i><i class="fa fa-star grey-text"> </i>',
        job:'Web Developer',
        img:'https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg',
        text:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut  consectetur adipisicing elit. Dolore cum accusamus aliquid commodi.'
    },

]

// select card items
const img = document.getElementById('person-img')
const name = document.getElementById('person-name')
const star = document.getElementById("stars")
const job = document.getElementById('person-job')
const text = document.getElementById('person-text')
// select all btn
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")
// set start item
let currentItem = 0
// load initial item
window.addEventListener('DOMContentLoaded', ()=>{
    showPerson()
})
// show based person item 
function showPerson (){
    const item = TistimonialsContent[currentItem];
    img.src = item.img
    name.textContent = item.name
    star.innerHTML = item.star
    job.textContent = item.job
    text.innerHTML = `<i class="fa fa-quote-left"></i> ${item.text} <i class="fa fa-quote-right"></i> `
}

// show prev person 
prevBtn.addEventListener('click', ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = TistimonialsContent.length -1
    }
    showPerson()
})
// show next person 
nextBtn.addEventListener('click', ()=>{
    currentItem++
    if(currentItem > TistimonialsContent.length - 1){
        currentItem = 0
    }
    showPerson()
})
// show random person
randomBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random() * TistimonialsContent.length)
    console.log(currentItem);
    showPerson(currentItem)
})





























/* `<div class="card testimonial-card p-5 bg-card">
    <!-- testimonial img -->
    <div class="avatar mx-auto white view overlay zoom rounded-circle z-depth-1-half">
        <img src=${TistimonialsContent[1].img} alt="woman avatar">
    </div>
    <!-- testimonial content -->
    <div class="card-body text-center">
        <!-- Name -->
        <h4 class="card-title">${TistimonialsContent[1].name}</h4>
        <!-- title-->
        <h6 class="card-title grey-text">${TistimonialsContent[1].job}</h6>
        <i class="fa fa-star blue-text"> </i>
        <i class="fa fa-star blue-text"> </i>
        <i class="fa fa-star blue-text"> </i>
        <i class="fa fa-star blue-text"> </i>
        <i class="fa fa-star wite-text"> </i>
        <hr>
        <!-- Quotation -->
        <p class="lead grey-text">
            <i class="fa fa-quote-left"></i> 
            ${TistimonialsContent[1].text}
            <i class="fa fa-quote-right"></i> 
        </p>
    </div>
    <div class="icon-container text-center ">
        <i class="fa fa-angle-double-left fa-2x mx-2"></i>
        <i class="fa fa-angle-double-right fa-2x mx-2"></i>
    </div>
</div>` */ 