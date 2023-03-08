const todoList = document.querySelector('ul')
const newTodo = document.createElement('li')
newTodo.textContent = 'Do homework'
todoList.appendChild(newTodo)
const anothor = document.createElement('li')
anothor.textContent = 'Pay bills'
todoList.insertBefore(anothor, todoList.firstElementChild)
const modifiedTodo = document.createElement('li')
modifiedTodo.textContent = 'Feed the dog'
todoList.replaceChild(modifiedTodo, todoList.children[2])
todoList.children[1].remove()

