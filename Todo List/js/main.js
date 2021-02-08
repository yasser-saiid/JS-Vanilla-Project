// selector
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

// event listeners
todoBtn.addEventListener('click', addItem)
todoList.addEventListener('click', checkItem)


// functions
// function for add new item 
function addItem (e){
    e.preventDefault();
    if(todoInput.value === ''){
        alert('Please Add Item')
    }else{
        // create todo div
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        //create li 
        const newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        newTodo.classList.add('todo-item')
        // append newTod (item) in todoDiv
        todoDiv.appendChild(newTodo)
        // ceate checked btn 
        const checkedBtn = document.createElement('button')
        checkedBtn.innerHTML = `<i class="fa fa-check"></i>`
        checkedBtn.classList.add('checked-btn')
        // add checkdBtn in TodoDiv
        todoDiv.appendChild(checkedBtn)
        //create trash btn
        const trashBtn = document.createElement('button')
        trashBtn.innerHTML = `<i class="fa fa-trash"></i>`
        trashBtn.classList.add('trash-btn')
        // add trashBtin in todoDiv
        todoDiv.appendChild(trashBtn)
        // append big div or parent div (todoDiv) in todoList
        todoList.appendChild(todoDiv)
        // clear input value after add task
        todoInput.value = ''
    }
}

// function for delete item 
function checkItem (e) {
    // remove item 
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.classList.add('uncomplated')
        e.target.parentElement.parentElement.remove()

    } 
    //complet item
    else if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.classList.add('complated')
        e.target.parentElement.parentElement.style.opacity = '0.3'
        e.target.parentElement.previousSibling.style.color= '#b7b4b4';
        e.target.parentElement.previousSibling.style.textDecoration= 'line-through';
    }
}
