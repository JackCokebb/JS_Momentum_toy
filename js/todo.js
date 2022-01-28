const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todo", JSON.stringify(toDos)); //array to string
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const cancelButton = document.createElement("button");
  span.innerText = newTodo;
  cancelButton.innerText = "❌";
  cancelButton.addEventListener("click", onCancelClicked);

  li.appendChild(span);
  li.appendChild(cancelButton);

  todoList.appendChild(li);
}

function onCancelClicked(event) {
  //delete todo
  const target_li = event.target.parentElement;
  target_li.remove();
}
function handleToDosubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = ""; // to make todo box empty
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDosubmit);
