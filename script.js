let click_count = 0;

function handleTitleClicked() {
  console.log("title was clicked!");
  gott.style.color = "blue";
  click_count++;
  if (click_count > 5) {
    gott.innerText = "STOP!";
    gott.style.color = "red";
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

const hellos = document.getElementsByClassName("hello");
//console.log(hellos);
const got = document.getElementsByTagName("h1");
//console.log(got);
const gott = document.querySelector(".hello:first-child"); //css selector
console.dir(gott);
//gott.style.color = "blue";
gott.addEventListener("click", handleTitleClicked);

const got2 = document.querySelector("h2");
got2.addEventListener("mouseenter", handleTitleEntered);
got2.addEventListener("mouseleave", handleTitleLeft);
