/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
div elemente su id "output" viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
"use strict";
console.log("script.js file was loaded");

const outputEl = document.getElementById("output");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // Reset html
  outputEl.innerHTML = "";
  const target = e.target;
  const input = target["search"].value.trim();
  // remove ',' with regex
  const inputVal = input.replace(/,/g, "");
  // Check if inputVal is not a number or is empty
  if (isNaN(inputVal) || inputVal === "") {
    const pEl = document.createElement("p");
    pEl.textContent = "Only numbers allowed with dot";
    pEl.style.width = "100%";
    outputEl.append(pEl);
    return;
  }
  const lb = calcLb(inputVal);
  const grams = calcG(inputVal);
  const oz = calcOz(inputVal);
  addToHtml([lb, grams, oz]);
});

function calcLb(value) {
  const res = value * 2.2046;
  const resWithText = res + "lb";
  return resWithText;
}

function calcG(value) {
  const res = value / 0.001;
  const resWithText = res + "g";
  return resWithText;
}

function calcOz(value) {
  const res = value * 35.274;
  const resWithText = res + "oz";
  return resWithText;
}

function addToHtml(arr) {
  const elsArr = arr.map((elText) => {
    const pEl = document.createElement("p");
    pEl.textContent = elText;
    return pEl;
  });
  outputEl.append(...elsArr);
}
