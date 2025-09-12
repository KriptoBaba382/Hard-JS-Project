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
    screens: "",
    screenPrice: 0,
    adaptive: true,
    service1: "",
    service2: "",
    allServicePrices: 0,
    rollback: 15,
    fullPrice: 0,
    ServicePercentPrice: 0,
    asking: function () {
        this.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
        this.screens = prompt(
            "Какие типы экранов нужно разработать?",
            "Простые, Сложные, Интерактивные"
        );

        this.screenPrice = +prompt("Сколько будет стоить данная работа?");
        while (!this.isNumber(this.screenPrice)) {
            this.screenPrice = +prompt("Сколько будет стоить данная работа?");
        }
        this.adaptive = confirm("Нужен ли адаптив на сайте?");
        this.allServicePrices = this.getAllServicePrices();
        this.fullPrice = this.getFullPrice()
        console.log(this.getRollbackMessage());
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    getAllServicePrices() {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                this.service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1) {
                this.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
            sum += +prompt("Сколько это будет стоить?");
        }
        return sum;
    },

    getRollbackMessage: function (/* Эта функция принимает входной параметр - цена (price) */) {
        console.log(this.fullPrice)
        if (this.fullPrice >= 30000) {
            return "Даем скидку в 10%";
        }
        if (this.fullPrice >= 15000 && this.fullPrice < 30000) {
            return "Даем скидку в 5%";
        }
        if (this.fullPrice < 1500 && this.fullPrice > 0) {
            return "Скидка не предусмотрена";
        }
        if (this.fullPrice <= 0) {
            return "Скидка не предусмотрена";
        }
    },
    getFullPrice() {
        return this.screenPrice + this.allServicePrices;
    },
    getTitle() {
        return this.title.charAt(0).toUpperCase() + this.title.slice(1);
    },
    getServicePercentPrices() {
        return this.fullPrice - this.fullPrice * (this.rollback / 100);
    },
    start: function () {
        this.asking();
        this.logger();
    },
    logger: function () {
        for (let i in this) {
            console.log(this[i]);
        }
    },
};
appData.start();
// fullPrice = getFullPrice();
// title = getTitle();
// appData.ServicePercentPrice = getServicePercentPrices();
// const servicePercentPrice = getServicePercentPrices(
//   appData.fullPrice,
//   appData.rollback
// );

// console.log(appData.fullPrice);
// console.log(appData.ServicePercentPric
