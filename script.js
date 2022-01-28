const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginButtonClick() {
  console.dir(loginInput);
  console.log("login clicked");
  const userName = loginInput.value;
  console.log("hello! " + userName);
}

loginButton.addEventListener("click", handleLoginButtonClick);
