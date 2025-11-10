// Task 1

console.log("js".toUpperCase());

// Task 2

function getHaveStrBeginning(stringsArray, searchFilter) {
  let changedArray = [];

  for (let i = 0; i < stringsArray.length; i++) {
    if (stringsArray[i].toLowerCase().startsWith(searchFilter.toLowerCase())) {
      changedArray.push(stringsArray[i]);
    }
  }
  return changedArray;
}

console.log(
  getHaveStrBeginning(
    [
      "Lower",
      "LowerSuper",
      "SuperLower",
      "Shti",
      "Gosa",
      "You",
      "Salsa Tellse",
      "Give me more Salsa",
    ],
    "Lower"
  )
);

// Task 3

let number = 32.58884;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// Task 4

let numbersArray = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...numbersArray));
console.log(Math.max(...numbersArray));

// Task 5

console.log(Math.ceil(Math.random() * 10));

// Task 6

function getRandomUserNumbers(rangeOfNumbers) {
  let personilisedArray = [];

  for (let i = 0; i < rangeOfNumbers / 2; i++) {
    personilisedArray.push(Math.round(Math.random() * rangeOfNumbers));
  }

  return personilisedArray;
}

console.log(getRandomUserNumbers(4));
console.log(getRandomUserNumbers(50));

// Task 7

function getRandomInRange(from, to) {
  let min = Math.min(from, to);
  let separation = Math.max(from, to) - min;
  return min + Math.round(Math.random() * separation);
}

console.log(getRandomInRange(20, 50));
console.log(getRandomInRange(40, 45));

// Task 8

console.log(new Date());

// Task 9

let currentDate = new Date();

let days73 = 73 * 24 * 60 * 60 * 1000;

console.log(new Date(+currentDate + days73));

// Task 10

function getRussianDate(dateObj) {
  let russianDays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  let russianMonths = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  return `Дата: ${dateObj.getDate()} ${
    russianMonths[dateObj.getMonth()]
  } ${dateObj.getFullYear()} — это ${russianDays[dateObj.getDay()]}
Время: ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
}

console.log(getRussianDate(new Date()));
