"use strict";

const title = prompt("Как называется ваш проект?");
console.log(title);
const screens = prompt(
  "Какие типы экранов нужно разработать? пример: Простые, Сложные, Интерактивные"
);
console.log(screens);
const screenPrice = prompt("Сколько будет стоить данная работа? пример:1200");

const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const rollback = 15;
// const servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
// console.log(servicePercentPrice);
// console.log(Math.ceil(servicePercentPrice));
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
function getAllServicePrices(priceOne, priceTwo) {
  return priceOne + priceTwo;
}

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

function getTitle() {
  return title.charAt(0).toUpperCase() + title.slice(1);
}

function getServicePercentPrices(fullPrice, rollback) {
  return fullPrice - fullPrice * (rollback / 100);
}

const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
