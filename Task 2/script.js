/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
"use strict";
console.log("script.js file was loaded");

const btnEl = document.getElementById("btn__element");
const btnOutput = document.getElementById("btn__state");
let count = Number();

btnEl.addEventListener("click", () => counter());

function counter() {
  count++;
  btnOutput.innerHTML = count;
}
