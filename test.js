//console.log(2423);
//console.log("sdasd");

let z = 21; //can be updated
const x = 5; // value can not be updated
var y = 4; //we are not protected by language
const empty = null;
const myName = "JEE";
console.log(2 ** 4); //power
//x = 6;
//console.log(x);
//console.log(x + y);
//console.log("hello " + myName);
//alert("hi");
const mon = "mon";
const array = [1, 2, 3, "mon", mon];
const array2 = [];
//console.log(array);
array.push("sun");
//console.log(array);

//creating object
const player = {
  name: "JEE",
  age: 26,
  money: 300,
  sayHello(name) {
    console.log("hello my name is JEE! " + name);
  },
  sayBye: function (name) {
    console.log("bye bye ! " + name + " see you again!");
  },
};
console.log(player);
//console.log(player["name"]);
player.money = 4000;
//console.log(player.money);
player.height = 181;
console.log(player);
const hoho = "hoho";
player.sayHello("hohe");
player.sayBye("moran");

let userAge = prompt("How old are you?");
alert("his age is " + userAge);
console.log(typeof userAge);
if (isNaN(userAge)) {
  alert("input is not number so i changed it");
  userAge = parseInt(userAge);
}

console.log(typeof userAge);

/*event listener + style*/
let click_count = 0;

function handleTitleClicked() {
  console.log("title was clicked!");
  //gott.style.color = "blue";
  click_count++;
  if (click_count > 5) {
    gott.innerText = "STOP!";
    gott.style.color = "red";
  } else if (gott.style.color === "blue") {
    gott.style.color = "tomato";
  } else {
    gott.style.color = "blue";
  }
}

function handleTitleEntered() {
  console.log("title was entered");
  got2.style.color = "green";
}
function handleTitleLeft() {
  console.log("mouse left");
  got2.style.color = "black";
}
function handleWindowResize() {
  console.log("window resized");
  document.body.style.backgroundColor = "tomato";
}
function handleCopy() {
  alert("copier!");
}

const hellos = document.getElementsByClassName("hello");
//console.log(hellos);
const got = document.getElementsByTagName("h1");
//console.log(got);
const gott = document.querySelector(".hello:first-child"); //css selector
console.dir(gott);
//gott.style.color = "blue";
gott.addEventListener("click", handleTitleClicked);

const got2 = document.querySelector("h2");
//got2.addEventListener("mouseenter", handleTitleEntered);
got2.onmouseenter = handleTitleEntered;
got2.addEventListener("mouseleave", handleTitleLeft);

//window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleCopy);
/*---------------------------------------------------------------------*/
function handleTitleClicked() {
  const clickedClass = "active";
  //if (gott.className === clickedClass) gott.className = "";
  // if (gott.classList.contains(clickedClass))
  //   gott.classList.remove(clickedClass);
  // else gott.classList.add(clickedClass);
  gott.classList.toggle(clickedClass);
}

const gott = document.querySelector("div.hello:first-child h1"); //css selector
console.dir(gott);
//gott.style.color = "blue";
gott.addEventListener("click", handleTitleClicked);
