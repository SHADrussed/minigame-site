// Task 1

const header = document.querySelector(".header");
const button = document.querySelector(".header__button");

button.addEventListener("click", function () {
  if (header.textContent != "") {
    header.textContent = "";
  } else {
    header.textContent = "Загоооловок";
  }
});

// Task 2

const paragraph = document.querySelector(".paragraph");
const colorButton = document.querySelector(".paragraph__button");

colorButton.addEventListener("click", function () {
  paragraph.style.color = "blue";
});

// Task 3

const headerTwo = document.querySelector(".headerTwo");
const haeaderSecondButton = document.querySelector(".header__textChange");

haeaderSecondButton.addEventListener("click", function () {
  headerTwo.textContent = "Привет, мир!";
});

// Task 4

const someDescriptions = document.querySelectorAll(".description");
someDescriptions.forEach((el) => {
  el.textContent = "Измененый текст";
});

// Task 5

const descriptionsTwo = document.querySelectorAll(".descriptionTwo");
descriptionsTwo.forEach((el) => {
  el.textContent = "Новый текст";
});

// Task 6

const addElementButton = document.querySelector(".addElement");

addElementButton.addEventListener("click", function () {
  const newDiv = document.createElement("p");
  newDiv.textContent = "Новый абзац";
  document.body.appendChild(newDiv);
});

// Task 7

const deleteButton = document.querySelector(".descriptionThree__delete");
const decrList = document.querySelectorAll(".descriptionThree");

deleteButton.addEventListener("click", function () {
  decrList[0].remove();
});
