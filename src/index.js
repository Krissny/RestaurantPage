import home from "./home.js";

const btn = document.querySelector("#home");
const cont = document.querySelector("#content");
cont.appendChild(home());
function component() {
  cont.innerHTML = "";
  cont.appendChild(home());
}
btn.addEventListener("click", component);
