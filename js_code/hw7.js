// Task 1

const firstPeople = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
firstPeople.sort((a, b) => a.age - b.age);
console.log(firstPeople);
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

// Task 2

function isPositive(elem) {
  // писать код тут
  return elem > 0;
}
function isMale(elem) {
  // писать код тут
  return elem.gender == "male";
}
function filter(list, ruleFunction) {
  // писать код тут
  let cleanedList = [];
  for (let i = 0; i < list.length; i++) {
    if (ruleFunction(list[i])) {
      cleanedList.push(list[i]);
    }
  }
  return cleanedList;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people, isMale));

// Task 3

function intervalDataReminder(howLong, interval) {
  let timerId = setInterval(
    () => alert(`Дата сейчас: ${new Date()}`),
    interval * 1000
  );

  setTimeout(() => {
    clearInterval(timerId);
    alert(`${howLong} секунд прошло`);
  }, howLong * 1000);
}

intervalDataReminder(30, 3);

// Task 4

function delayForSecond(callback) {
  // Код писать можно только внутри этой функции
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log("Привет, Глеб!");
});

// Task 5

// Функция delayForSecond через 1 секунду пишет в консоль
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond((item) => {
  return sayHi("Глеб");
});
