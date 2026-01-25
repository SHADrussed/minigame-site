function guessNumberGame() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  while (true) {
    let userGuess = prompt("Попробуй угадать число!");
    if (userGuess == randomNumber) {
      alert("Ты угадал!");
      break;
    } else if (userGuess < randomNumber) {
      alert("Твое число меньше загаданного");
    } else {
      alert("Твое число больше загаданного");
    }
  }
}

function mathGame() {
  function getRandomOperator(operations) {
    return operations[Math.floor(Math.random() * operations.length)];
  }

  function getRandomNumber(variety = 100) {
    return Math.floor(Math.random() * (variety + 1));
  }

  function countAnswer(operator, firstNumber, secondNumber) {
    return (operator = "+"
      ? firstNumber + secondNumber
      : (operator = "-"
          ? firstNumber - secondNumber
          : (operator = "*"
              ? firstNumber * secondNumber
              : Math.floor(firstNumber / secondNumber))));
  }

  let gameData = {
    operations: ["+", "-", "*", "/"],
  };

  alert('Привет! Приветствую в игре "Простая арифметика"');

  let randomOperator = getRandomOperator(gameData.operations);
  let randomNumberFirst = getRandomNumber(20);
  let randomNumberSecond = getRandomNumber(10);

  if (randomNumberSecond === 0) {
    randomNumberSecond = 1; // Избегаем деления на ноль
  }

  let finalExpression = parseInt(
    prompt(
      `Чему равно ${randomNumberFirst} ${randomOperator} ${randomNumberSecond} =  ?`
    )
  );

  let correctAnswer = countAnswer(
    randomOperator,
    randomNumberFirst,
    randomNumberSecond
  );

  if (finalExpression === correctAnswer) {
    alert("Правильно!");
  } else {
    alert("Неправильно..");
  }

  return;
}

function reverseTextGame() {
  let userText = prompt("Введи текст, который хочешь перевернуть!");
  alert(userText.split("").reverse().join(""));
}

function questionGameQuiz() {
  // Массив вопросов и правильных ответов
  const quiz = [
    {
      question: "Какой цвет неба?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2, // номер правильного ответа
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];

  let correctAnswers = 0;

  for (let i = 0; i < quiz.length; i++) {
    userAnswer = parseInt(
      prompt(`${quiz[i].question} 
        Варианты отоветов: ${quiz[i].options.join(" ")}`)
    );
    if (userAnswer === quiz[i].correctAnswer) {
      correctAnswers += 1;
    }
  }

  alert("Количество правильных ответов: " + correctAnswers);
}

// your code goes here
function rockPaperScissorsGame() {
  let userGuess = prompt("Выбери камень, ножницы или бумагу!").toLowerCase();

  let variations = ["камень", "ножницы", "бумага"];

  let computerGuess = variations[Math.floor(Math.random() * 3)];

  if (userGuess == computerGuess) {
    alert("Ничья!");
  } else if (userGuess == "камень") {
    if (computerGuess == "бумага") {
      alert("Проигрыш :(");
    } else {
      alert("Выйгрыш!");
    }
  } else if (userGuess == "ножницы") {
    if (computerGuess == "камень") {
      alert("Проигрыш :(");
    } else {
      alert("Выйгрыш!");
    }
  } else if (userGuess == "бумага") {
    if (computerGuess == "ножницы") {
      alert("Проигрыш :(");
    } else {
      alert("Выйгрыш!");
    }
  }

  alert(`Твой выбор - ${userGuess}, компьютер выбрал - ${computerGuess}`);
}

function createRandomColour() {
  const backgroundGames = document.querySelector(".games");

  var randomRgb = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];

  backgroundGames.style.backgroundColor = `rgb(${randomRgb[0]}, ${randomRgb[1]}, ${randomRgb[2]})`;
}

const track = document.querySelector(".ticker__track");
const clone = track.cloneNode(true);
track.parentNode.appendChild(clone);
