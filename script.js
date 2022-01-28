const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function handleLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //greeting.innerText = "Hello " + userName;
  greeting.innerText = `Hello ${userName}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  //show the greeting
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${savedUserName}!`;
}
