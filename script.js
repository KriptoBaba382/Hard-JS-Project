"use strict";

// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let service1;
// let service2;
// let servicePrice1;
// let allServicePrices;
// let fullPrice;
// let rollback = 15;
// let ServicePercentPrice;

const appData = {
    title: "",
    screens: '',
    screenPrice: 0,
    adaptive: true,
    service1: '',
    service2: '',
    allServicePrices: 0,
    fullPrice: 0,
    rollback: 15,
    ServicePercentPrice: 0,
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
        appData.screens = prompt(
            "Какие типы экранов нужно разработать?",
            "Простые, Сложные, Интерактивные"
        );
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!isNumber(screenPrice)) {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        }
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
        asking();
    }
}
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
        "Какие типы экранов нужно разработать?",
        "Простые, Сложные, Интерактивные"
    );
    appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    while (!isNumber(screenPrice)) {
        appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    }
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
};
asking();

const getRollbackMessage = function () {
    if ((price) => 30000) {
        return "Даем скидку в 10%";
    }
    if ((price) => 15000 && fullPrice < 30000) {
        return "Даем скидку в 5%";
    }
    if (price < 1500 && fullPrice > 0) {
        return "Скидка не предусмотрена";
    }
    if (price <= 0) {
        return "Скидка не предусмотрена";
    }
};
function getAllServicePrices() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
        }
        sum += prompt("Сколько это будет стоить?");
    }
    return sum;
}
allServicePrices = getAllServicePrices();
//return priceOne + priceTwo;
//const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

const getFullPrice = function () {
    return appData.screenPrice + appData.allServicePrices;
};
fullPrice = getFullPrice();
function getTitle() {
    return appData.title.charAt(0).toUpperCase() + appData.title.slice(1);
}
title = getTitle();
function getServicePercentPrices() {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
}
appData.ServicePercentPrice = getServicePercentPrices();
const servicePercentPrice = getServicePercentPrices(appData.fullPrice, appData.rollback);

console.log(appData.fullPrice)
console.log(appData.ServicePercentPrice)