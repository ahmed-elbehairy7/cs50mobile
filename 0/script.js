const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

var itemCount = 0;
var uncheckedCount = 0;

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {

  typeName = document.createElement("input")
  typeName.placeholder = "Enter the name of the todo task..."
  typeNameSubmit = document.createElement("input")
  typeNameSubmit.type = "submit"

  typeNameForm = document.createElement("form")

  typeNameForm.appendChild(typeName)
  typeNameForm.appendChild(typeNameSubmit)

  list.appendChild(typeNameForm)
  typeName.focus()

  typeNameSubmit.addEventListener("click",
  (e) => {

    todo = document.createElement("li");
    todo.classList.add(classNames.TODO_ITEM);

    text = document.createElement("p");
    text.classList.add(classNames.TODO_TEXT)
    text.innerText = typeName.value

    checkbox = document.createElement("input");
    checkbox.classList.add(classNames.TODO_CHECKBOX)
    checkbox.type = "checkbox"
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        uncheckedCount--
        uncheckedCountSpan.innerText = uncheckedCount
      }
      else {
        uncheckedCount++
        uncheckedCountSpan.innerText = uncheckedCount
      }
    })

    deleteButton = document.createElement("button");
    deleteButton.classList.add(classNames.TODO_DELETE);

    deleteButton.addEventListener("click", function() {
      todo.remove()
      itemCount--
      itemCountSpan.innerText = itemCount
      if (!checkbox.checked) {
        uncheckedCount--
      uncheckedCountSpan.innerText = uncheckedCount
      }

    })

    todo.appendChild(text)
    todo.appendChild(checkbox)
    todo.appendChild(deleteButton)


    list.appendChild(todo)
    e.preventDefault()
    itemCount++
    uncheckedCount++
    itemCountSpan.innerText = itemCount
    uncheckedCountSpan.innerText = uncheckedCount


    typeNameForm.remove()

  })


}
