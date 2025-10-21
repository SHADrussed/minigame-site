// Task 1
function getLowerNumber(a, b) {
  return a > b ? b : a;
}

console.log(getLowerNumber(11, 2));

// Task 2

let isEven = (a) => {
  return a % 2 == 0 ? "Число четное" : "Число нечетное";
};

console.log(isEven(12));

// Task 3

let squarePrint = (a) => console.log(a ** 2);

squarePrint(5);

let squareGet = (a) => {
  return a ** 2;
};

console.log(squareGet(41));

// Task 4

let sayHi = (age) => {
  age >= 13
    ? console.log("Добро пожаловать")
    : 0 <= age && age <= 12
    ? console.log("Привет, друг!")
    : console.log("Вы ввели неправильное значение");
};

sayHi(12);
sayHi(23);
sayHi(-21);

// Task 5

function numberMultiply(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  }
  return a * b;
}

console.log(numberMultiply(0, "sa"));
console.log(numberMultiply(8, 3));

// Task 6

function getCubedNumber(number) {
  number = Number(number);

  if (isNaN(number)) {
    return "Переданный параметр не является числом";
  }

  return `${number} в кубе равняется ${number ** 3}`;
}

console.log(getCubedNumber("no"));
console.log(getCubedNumber(5));

// Task 7

function getCircleArea() {
  return 3.14 * this.radius ** 2;
}

function getCirclePerimeter() {
  return 2 * 3.14 * this.radius;
}

let circle1 = {
  radius: 12,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

let circle2 = {
  radius: 2,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

console.log(circle1.getPerimeter());
console.log(circle1.getArea());
console.log(circle2.getPerimeter());
console.log(circle2.getArea());
