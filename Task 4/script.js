/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
"use strict";
console.log("script.js file was loaded");

const ENDPOINT = "cars.json";
const outputEl = document.getElementById("output");

(async () => {
  const res = await fetch("./cars.json");
  const dataCars = await res.json();
  printCars(dataCars);
})();

function printCars(arrCars) {
  let colorIndex = Number();
  arrCars.forEach((obj) => {
    const cardEl = createNewElement("div", "card");
    const headingEl = createNewElement("h2", "card-heading", obj.brand);
    const subheadingEl = createNewElement("h3", "card-subheading", "Models");
    const ulEl = createNewElement("ul", "card-ul");
    // add color to one headings
    setColorEl(colorIndex, headingEl);
    setColorEl(colorIndex, subheadingEl);
    const modelsArrLi = getModelsLi(obj.models, colorIndex);
    // appending to #output
    ulEl.append(...modelsArrLi);
    cardEl.append(headingEl, subheadingEl, ulEl);
    outputEl.append(cardEl);
    // adding +10 for color index
    colorIndex = colorIndex + 10;
  });
}

function getModelsLi(moduleArr, colorIndex) {
  const elArr = moduleArr.map((el) => {
    const liEl = document.createElement("li");
    liEl.classList.add("card-li");
    setColorEl(colorIndex, liEl);
    liEl.textContent = el;
    return liEl;
  });
  return elArr;
}

function setColorEl(clrIndex, element) {
  element.style.background = `-webkit-linear-gradient(
    0deg,
    hsl(${clrIndex + 16}, 100%, 69%),
    hsl(${clrIndex}, 99%, 60%)`;
  element.style.webkitBackgroundClip = "text";
  element.style.webkitTextFillColor = "transparent";
}

function createNewElement(element, className, textVal = null) {
  const el = document.createElement(element);
  el.classList.add(className);
  el.textContent = textVal;
  return el;
}
