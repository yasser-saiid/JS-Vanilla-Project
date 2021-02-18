// externaly api => array contains all date
const menu = [
    {
        id: 1,
        title: 'Hamburger',
        categgory: 'burger',
        price: 9.79,
        img: '../image/burger.jpg',
        desc: `<span>Fast food burger </span>is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service`
    },
    {
        id: 2,
        title: 'Triple Whopper',
        categgory: 'burger',
        price: 11.55,
        img: '../image/burger-2.jpg',
        desc: `<span>Fast food burger </span>is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service`
    },
    {
        id: 3,
        title: ' Pepperoni Pizza',
        categgory: 'pizza',
        price: 15.99,
        img: '../image/pizza.jpg',
        desc: `<span>Fast food pizza </span>is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service`
    },
    {
        id: 4,
        title: 'Meat Pizza',
        categgory: 'pizza',
        price: 13.99,
        img: '../image/pizza-2.jpg',
        desc: `<span>Fast food pizza </span>is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service`
    },
    {
        id: 5,
        title: 'SUPER DINNER STRIPS',
        categgory: 'chicken',
        price: 16.25,
        img: '../image/chicken.jpg',
        desc: `<span>Fast food chicken </span>is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service`
    },
    {
        id: 6,
        title: 'spicy chicken wings',
        categgory: 'chicken',
        price: 16.67,
        img: '../image/chicken-2.jpg',
        desc: `<span>Fast food chicken </span>is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service`
    },
    {
        id: 7,
        title: 'potato mashed',
        categgory: 'potatoes',
        price: 5.25,
        img: '../image/potatoes.jpg',
        desc: `<span>Fast food potatoes </span>is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service`
    },
    {
        id: 8,
        title: 'potato chips',
        categgory: 'potatoes',
        price: 7.25,
        img: '../image/potatoes-2.jpg',
        desc: `<span>Fast food potatoes </span>is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service`
    },
    {
        id: 9,
        title: 'shawarma sandwiches',
        categgory: 'sandwich',
        price: 7.25,
        img: '../image/sandwitch.jpg',
        desc: `<span>Fast food potatoes </span>is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service`
    },
    {
        id: 10,
        title: 'shawarma sandwiches - 2',
        categgory: 'sandwich',
        price: 7.25,
        img: '../image/sandwitch-2.jpg',
        desc: `<span>Fast food potatoes </span>is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service`
    }
]

// select menu itens container
const items = document.querySelector('.menu-items')
// select button container
const btnContainer = document.querySelector('.menu-list')
// whene window load push all menu item in container 
window.addEventListener('DOMContentLoaded', ()=>{
    displayMenuItem(menu);
    genaritBtn()
})

// function to genarit dynamic buttons 
function genaritBtn (){
    categgories = menu.reduce((values, item) => {
        if(!values.includes(item.categgory)){
            values.push(item.categgory)
        }
        return values;
    }, ['all'])
    const categgoryBtns = categgories.map(btn => {
        return `<li class="list-item filter-btn" data-categgory=${btn}>${btn}</li>`
    }).join("")
    btnContainer.innerHTML = categgoryBtns;
    // select all filter btns and filter all item in menu
    const filterBtns = btnContainer.querySelectorAll('.menu-list .filter-btn');
    // filter buttons for filter all item in menu array
    filterBtns.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            const categgory =  e.currentTarget.dataset.categgory;
            const menuCategory = menu.filter(menuItem =>{
                if(menuItem.categgory === categgory){
                    return menuItem
                }
            })
            if(categgory === 'all'){
                displayMenuItem(menu)
            }else{
                displayMenuItem(menuCategory)
            }
        })
    })
}



// function for loop all item in menu array 
function displayMenuItem (menuItem){
    let displayMenu = menuItem.map(item =>{
        return `<div class="card-item">
            <div class="img">
                <img src=${item.img} alt=${item.title}/>
            </div>
            <div class="food-information">
                <h6 class="food-title">${item.title}<span class="price">$${item.price}</span></h6>
                <hr>
                <p class="food-description">${item.desc} </p>
            </div>
        </div>`
    });
    displayMenu = displayMenu.join("")
    items.innerHTML = displayMenu
};


