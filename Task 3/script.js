/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama div elemente su id "output".
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
"use strict";
console.log("script.js file was loaded");

const ENDPOINT = "https://api.github.com/users";
const btnEl = document.getElementById("btn");
const outputEl = document.getElementById("output");

btnEl.addEventListener("click", () => {
  init();
});

async function init() {
  const userData = await getData();
  if (userData === false) {
    console.warn("code stoped somethink wrong");
    return;
  }
  const filteredData = userData.map((obj) => {
    return { login: obj.login, avatar_url: obj.avatar_url };
  });
  outputEl.innerHTML = "";
  addToHtml(filteredData);
}

async function getData() {
  try {
    const result = await fetch(ENDPOINT);
    if (!result.ok) {
      throw new Error(`${result.status},${result.message}`);
    }
    const data = await result.json();
    return data;
  } catch (err) {
    console.warn(err);
    return false;
  }
}
function addToHtml(dataArr) {
  const ulEl = document.createElement("ul");
  ulEl.classList.add("grid");
  dataArr.map((obj) => {
    const liEl = document.createElement("li");
    const pEl = document.createElement("p");
    const imgEl = document.createElement("img");
    pEl.textContent = `Login: ${obj.login}`;
    liEl.classList.add("card");
    imgEl.classList.add("li-img");
    pEl.classList.add("user");
    imgEl.setAttribute("src", `${obj.avatar_url}`);
    liEl.append(imgEl, pEl);
    ulEl.append(liEl);
  });
  outputEl.append(ulEl);
}
