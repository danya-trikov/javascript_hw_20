"use strict";

let startPhrase = alert('Вітання! Це гра "Вгадай число". Я загадую число від 1 до 10, твоє завдання – вгадати моє число');
let contPhrase = "Are you ready?";
let userNumber = "Вгадай моє число!";
const randomNumber = Math.floor(Math.random() * 10) + 1;


if (confirm(contPhrase)) {
    alert("Тодi починаємо!");
    alert("Моє число: " + randomNumber);
    prompt(userNumber);
} else {
    alert("Можливо, в інший раз. До побачення!");
}

if (userNumber === randomNumber) {
    alert("Твоя взяла. Я загадав число " + randomNumber + ".");
} else {
    alert("Ха-ха. Це не моє число. Може зiграєш ще раз? Перезавантаж гру i спробуй)");
}
