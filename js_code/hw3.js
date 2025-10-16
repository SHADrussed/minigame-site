for (let index = 0; index <= 1; index++) {
  console.log("Привет");
}

console.log();

for (var i = 0; i < 5; i++) {
  console.log(i + 1);
}

console.log();

for (var i = 7; i < 23; i++) {
  console.log(i);
}

console.log();

let obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};

for (var prop in obj) {
  console.log(`${prop} - зарплата ${obj[prop]} долларов.`);
}

console.log();

var n = 1000,
  count = 0;

for (n; n >= 50; n = n / 2) {
  count++;
}

console.log(n, count);

console.log();

let first_friday = 6;

for (var i = 6; i < 32; i++) {
  if ((i - first_friday) % 7 == 0) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет`);
  }
}
