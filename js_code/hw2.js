let password = 'пароль';
let userPassword = prompt('Введите пароль');

if (userPassword == password){
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

let c = 20;
if (c > 0 && c < 10){
    console.log('Верно');
} else{
    console.log('Неверно');
}

let d = 13;
let e = 6;

if (d > 100 || e > 100){
    console.log('Верно')
} else {
    console.log('Неверно')
}

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));


let monthNumber = 12;

switch (monthNumber) {
    case 1: case 2: case 12:
        console.log('зима');
        break;
    case 3: case 4: case 5:
        console.log('весна');
        break;
    case 6: case 7: case 8:
        console.log('лето');
        break;
    case 9: case 10: case 11:
        console.log('осень');
        break;
    default:
        console.log('Такого месяца не существует');
}