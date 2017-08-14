var moment = require('moment');
var chalk = require('chalk');

let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
let currentYearDay = moment().format("DDDo");

let currentSeconds = moment().seconds();
let currentMinutes = moment().minutes();
let currentHour = moment().hours();

currentMinutes = (currentHour*60) + currentMinutes;

currentSeconds = (currentMinutes*60) + currentSeconds;

let daylightSavings = moment().isDST() ? chalk.green("is"): chalk.red("is not");
let leapYear = moment().isLeapYear() ? chalk.green("is"): chalk.red("is not");

console.log('It is ' + chalk.blue(currentDate));
console.log('It is the ' + chalk.magenta(currentYearDay) + ' day of the year');
console.log('it is ' + chalk.cyan(currentSeconds) + ' into the day');
console.log('It ' + daylightSavings + ' Daylight Savings time');
console.log('It ' + leapYear + ' a leap year');
