for (let index = 0; index <= 1; index++) {
  console.log("Привет");
}

console.log();

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

console.log();

for (let i = 7; i < 23; i++) {
  console.log(i);
}

console.log();

let obj = {
  Kolya: "200",
  Vasya: "300",
  Petya: "400",
};

for (let prop in obj) {
  console.log(`${prop} - зарплата ${obj[prop]} долларов.`);
}

console.log();

let n = 1000,
  count = 0;

for (n; n >= 50; n = n / 2) {
  count++;
}

console.log(n, count);

console.log();

let firstFriday = 6;

for (let i = 6; i < 32; i++) {
  if ((i - firstFriday) % 7 == 0) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет`);
  }
}
