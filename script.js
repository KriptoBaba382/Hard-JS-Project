"use strict";

const title = prompt("Как называется ваш проект?");
console.log(title);
const screens = prompt(
  "Какие типы экранов нужно разработать? пример: Простые, Сложные, Интерактивные"
);
console.log(screens);
const screenPrice = prompt("Сколько будет стоить данная работа? пример:1200");
console.log(screenPrice);
const adaptive = confirm("Нужен ли адаптив на сайте?");
if (adaptive) {
  console.log("Item deleted.");
} else {
  console.log("Deletion cancelled.");
}
console.log(adaptive);
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);
const rollback = 15;
const servicePercentPrice = fullPrice - rollback;
console.log(servicePercentPrice);
console.log(Math.ceil(servicePercentPrice));
if ((fullPrice) => 30000) {
  console.log("Даем скидку в 10%");
}
if ((fullPrice) => 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
}
if (fullPrice < 1500 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
}
if (fullPrice <= 0) {
  console.log("Что-то пошло не так");
}
