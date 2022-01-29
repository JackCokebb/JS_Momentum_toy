const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todo";

let toDos = [];

/*save todo list to localstorage*/
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array to string
}

/*make todo element and append to todo list*/
function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const cancelButton = document.createElement("button");
  span.innerText = newTodoObj.text;
  cancelButton.innerText = "❌";
  cancelButton.addEventListener("click", onDeleteClicked);

  li.appendChild(span);
  li.appendChild(cancelButton);

  todoList.appendChild(li);
}

function idFilter(item, targetId) {
  return item.id !== targetId;
}

/*when delete button is clicked on todo list */
function onDeleteClicked(event) {
  //delete todo
  const target_li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(target_li.id));
  saveToDos();
  target_li.remove();
}

/*when user input a new todo list and submit it*/
function handleToDosubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = ""; // to make todo box empty
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedTodos = JSON.parse(savedToDos); //JSON string to JS object
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo); //forEach will give each element as first argument to function inside it
}
