#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const currentDate = argv["_"][0] === "current" && new Date();
const currentYear = argv?.y || argv?.year;
const currentMonth = argv?.m || argv?.month;
const currentDay = argv?.d || argv?.date;
const next = argv["_"][1] === "add" && argv?.d;
const prev = argv["_"][1] === "sub" && argv?.month;

if (currentDate) {
  if (next) {
    currentDate.setDate(currentDate.getDate() + next);
    console.log(
      "Дата и время в формате ISO на " +
        next +
        " дня вперёд: " +
        currentDate.toISOString()
    );
  } else if (prev) {
    currentDate.setMonth(currentDate.getMonth() - prev);
    console.log(
      "Дата и время в формате ISO на  " +
        prev +
        " месяц назад: " +
        currentDate.toISOString()
    );
  } else if (currentYear) {
    console.log("Текущий год: " + currentDate.getFullYear());
  } else if (currentMonth) {
    console.log("Текущий месяц: " + (currentDate.getMonth() + 1));
  } else if (currentDay) {
    console.log("Дата в календарном месяце: " + currentDate.getDate());
  } else {
    console.log(
      "Текущая дата и время в формате ISO: " + currentDate.toISOString()
    );
  }
}
