const months = [
    'Junuary',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.dead-line')
// select all h4 in deadline div 
const items = document.querySelectorAll('.dead-line h4')

// date format 
let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

let futuerDate = new Date(tempYear,tempMonth,tempDay + 10,11,30,0)
const year = futuerDate.getFullYear()

const hours = futuerDate.getHours()

const minutes = futuerDate.getMinutes()

let month = futuerDate.getMonth()
month = months[month]

let date = futuerDate.getDate()

let weekday = weekdays[futuerDate.getDay()]

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} AT... ${hours}:${minutes} AM`


function getRemainingTime(){
    const today = new Date().getTime()
    const currentTime = futuerDate - today
    // values in millisecond
    const oneDay = 20 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinutes = 60 * 1000

    // calculate all valies
    let days = Math.floor(currentTime / oneDay)
    let hours = Math.floor((currentTime % oneDay) / oneHour)
    let minutes = Math.floor((currentTime % oneHour) / oneMinutes)
    let seconds = Math.floor((currentTime % oneMinutes) / 1000)

    // set values array
    const values = [days, hours, minutes, seconds]

    function format(items){
        if(items < 10){
            return (items = `0${items}`)
        }else{
            return items
        }
    }

    items.forEach((item,index)=>{
        item.innerHTML = format(values[index])
    })


    if(currentTime < 0){
        clearInterval(countdown)
        deadline.innerHTML = `<h4>" sorry, this giveaway has expired "</h4>`
    }
}

let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()


















