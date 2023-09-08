let totalTodos = []
const inputValueEl = document.getElementById('add-todo')
const addTodoBtnEl = document.getElementById('add-todo-btn')
const allTodos = document.getElementById('all-todos')
const allTodosEl = document.getElementsByTagName('li')

addTodoBtnEl.addEventListener('click', () => {
    const todoText = inputValueEl.value
    totalTodos = Array.from(allTodosEl)
    const li = document.createElement('li')
    li.innerHTML = `
                    <span class="todo-incomplete">${ todoText }</span>
                    <span id="edit-icon"><i class="fa-solid fa-pen-to-square"></i></span>
                    <span id="delete-icon"><i class="fa-solid fa-trash"></i></span>
    `
    allTodos.appendChild(li)
})
