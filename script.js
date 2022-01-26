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

const hellos = document.getElementsByClassName("hello");
//console.log(hellos);
const got = document.getElementsByTagName("h1");
//console.log(got);
const gott = document.querySelector(".hello:first-child"); //css selector
console.dir(gott);
//gott.style.color = "blue";
gott.addEventListener("click", handleTitleClicked);
