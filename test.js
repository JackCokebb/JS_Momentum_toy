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
