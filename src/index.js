import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import "./style.css";

const btn1 = document.querySelector("#home");
const btn2 = document.querySelector("#menu");
const btn3 = document.querySelector("#contact");
const cont = document.querySelector("#content");
cont.appendChild(home());
function component1() {
  cont.innerHTML = "";
  cont.appendChild(home());
}
function component2() {
  cont.innerHTML = "";
  cont.appendChild(menu());
}
function component3() {
  cont.innerHTML = "";
  cont.appendChild(contact());
}
btn1.addEventListener("click", component1);
btn2.addEventListener("click", component2);
btn3.addEventListener("click", component3);
