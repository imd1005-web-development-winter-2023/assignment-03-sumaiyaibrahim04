const todos = [];

let checkBox = document.createElement('input');


const todoList = document.querySelector(".todo-list");
const form = document.querySelector(".add-todo-form");
const toDoInputBox = document.querySelector("#todo-name");
const deleteAllButton = document.querySelector(".delete-all");

todoList.classList.add("className");

console.log(todoList);

function renderToDoList() {
  // Clear all of the entries in the list
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  for (let i = 0; i < todos.length; i++) {
    const todoListItem = document.createElement("li");
    
    todoListItem.textContent = todos[i].text+" " ;
    /*const todoListCheck = document.createElement("button");
    todoListCheck.textContent = "v";*/

    const todoListButton = document.createElement("button");
    todoListButton.textContent = "x";

    todoListButton.dataset.index = i;

    todoListItem.appendChild(todoListButton);

    todoList.appendChild(todoListItem);
  }
}

function addTodoItem(event) {
  event.preventDefault();

  const newTodo = toDoInputBox.value;

  todos.push({
    text: newTodo,
    isDone: false,
  });

  console.log("I AM A FUNCTION", newTodo);

  console.log(todos);

  renderToDoList();
}

function handleButtonClickInsideUl(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  todoArrayIndexToDelete = event.target.dataset.index;

  todos.splice(todoArrayIndexToDelete, 1);

  console.log(todos);

  renderToDoList();
}

form.addEventListener("submit", addTodoItem);
todoList.addEventListener("click", handleButtonClickInsideUl);

renderToDoList();

function deleteAllTodos(event) {
  todos.length = 0;

  renderToDoList();
}

/*if (todos.length==0){
  ul.innerHTML = ''
}*/

deleteAllButton.addEventListener("click", deleteAllTodos);
