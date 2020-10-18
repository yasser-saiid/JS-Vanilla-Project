// lorem text 
const text = [
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis harum accusamus hic unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos.`,

    `unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos adipisicing elit. Debitis harum accusamus hic unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos.`,

    ` dignissimossit amet consectetur, adipisicing elit. Debitis harum accusamus hic unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos...vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat `,

    `nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis harum accusamus hic unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos.`,

    `unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos adipisicing elit. Debitis harum accusamus hic unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos..`,

    `accusamus hic unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos sit amet consectetur, adipisicing elit. Debitis harum accusamus hic unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos.`,

    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis harum accusamus hic unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos.`,

    `similique quaerat sequi doloremque quo dignissimos similique quaerat sequi doloremque quo dignissimos adipisicing elit. Debitis harum accusamus hic unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos.`,

    `nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis harum accusamus hic unde libero aspernatur, vitae deserunt qui nostrum possimus dolorum eligendi perferendis corrupti, similique quaerat sequi doloremque quo dignissimos..`,
]

// select item 

const form = document.querySelector('.lorem-form')
const amount = document.getElementById('amount')
const resulet = document.querySelector('.lorem-tex')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const value = parseInt(amount.value)
    const random = Math.floor(Math.random() * text.length)

    if(isNaN(value) || value == 0){
        resulet.innerHTML = `<h3 class="resulet">pls, select a value bettwen 1 : 8</h3>`
    }else{
        let templetText = text.slice(0, value)
        templetText = templetText.map((item)=>{
            return `<p class="resulet">${item}</p>`
        }).join("")
        resulet.innerHTML = templetText
    }
})