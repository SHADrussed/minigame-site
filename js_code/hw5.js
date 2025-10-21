const m = [1, 5, 4, 10, 0, 3];

// Task 1

for (let i = 0; i < m.length; i++) {
  console.log(m[i]);

  if (m[i] === 10) {
    break;
  }
}

// Task 2

for (let i = 0; i < m.length; i++) {
  if (m[i] === 4) {
    console.log("Индекс 4-ки: " + i);
  }
}

// Task 3

const joinMassive = [1, 3, 5, 10, 20];

console.log(joinMassive.join(" "));

// Task 4

const innerMassive = [];

for (let i = 0; i < 3; i++) {
  innerMassive.push([]);
  for (let j = 0; j < 3; j++) {
    innerMassive[i].push(1);
  }
}

console.log(innerMassive);

// Task 5

const addList = [1, 1, 1];

addList.push(2, 2, 2);

console.log(addList);

// Task 6

let delList = [9, 8, 7, "a", 6, 5];

delList.sort();
delList = delList.filter((el) => parseInt(el) === el);

console.log(delList);

// Task 7

let guessList = [9, 8, 7, 6, 5];

userGuess = parseInt(prompt("Угадай число!"));

if (guessList.includes(userGuess)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

// Task 8

let litter = "abcdef";

let reverseLitter = litter.split("").reverse().join("");

console.log(reverseLitter);

// Task 9

const array = [
  [1, 2, 3],
  [4, 5, 6],
];
const result = [].concat(...array);
console.log(result); // [1, 2, 3, 4, 5, 6]

// Task 10

const randomArray = [1, 2, 5, 7, 2, 1];

for (let i = 0; i < randomArray.length - 1; i++) {
  console.log(randomArray[i] + randomArray[i + 1]);
}

// Task 11

function square(numbersArray) {
  for (let i = 0; i < numbersArray.length; i++) {
    numbersArray[i] = numbersArray[i] ** 2;
  }
  return numbersArray;
}

console.log(square([2, 1, 5, 4, 8]));

// Task 12

function countLength(stringArray) {
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].length;
  }
  return stringArray;
}

console.log(countLength(["ad", "awdqww1", "aw12ss", "asd1wss"]));

// Task 13

function negative(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * -1;
  }
  return array;
}

console.log(negative([12, -23, 62, 93, 34, -1235]));

// Task 14

let listRandom = [];
let newEven = [];

for (let i = 0; i < 10; i++) {
  listRandom[i] = Math.floor(Math.random() * 10);
}

listRandom.forEach((element) => {
  if (element % 2 == 0) {
    newEven.push(element);
  }
});

console.log(listRandom);
console.log(newEven);

// Task 15

let listRandomn = [];
let summa = 0;

for (let i = 0; i < 6; i++) {
  listRandomn[i] = Math.floor(Math.random() * 10);
}

for (let index = 0; index < listRandomn.length; index++) {
  summa += listRandomn[index];
}

console.log(summa / listRandomn.length);
