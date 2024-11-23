// Import Moment.js and Moment Timezone Libraries
const moment = require("moment");
require("moment-timezone");

// 1. Calculate the number of days between your birthdate and the current date.
// Replace 'YYYY-MM-DD' with your actual birthdate in the format: 'YYYY-MM-DD'
const birthDate = moment("1990-05-15"); // Example: '1990-05-15'
const currentDate = moment();
const daysBetween = currentDate.diff(birthDate, "days");
console.log(`Days between given date and today: ${daysBetween}`);

// 2. Display the number of years, months, and days between your birthdate and the current date.
// Using moment.duration to get separate values for years, months, and days.
const duration = moment.duration(currentDate.diff(birthDate));
const years = duration.years();
const months = duration.months();
const days = duration.days();
console.log(`${years} years, ${months} months, and ${days} days`);

// 3. Given two dates, display the date closest to the current date.
// Replace 'YYYY-MM-DD' with two dates to compare in the format: 'YYYY-MM-DD'
const date1 = moment("2000-01-01"); // Example: '2000-01-01'
const date2 = moment("2024-01-01"); // Example: '2024-01-01'

// Determine which date is closest to the current date!
const closestDate =
  currentDate.diff(date1) < currentDate.diff(date2) ? date1 : date2;
console.log(
  `The date closest to today is: ${closestDate.format("YYYY-MM-DD")}`
);

// 4. Given two dates, display whether the first date is before or after the second date.
if (date1.isBefore(date2)) {
  console.log("The first date is before the second date!");
} else if (date1.isAfter(date2)) {
  console.log("The first date is after the second date!");
} else {
  console.log("The dates are the same!");
}

// 5. Display the current time in London
// Using Moment Timezone to get the current time in the "Europe/London" timezone.
const londonTime = moment().tz("Europe/London").format("HH:mm:ss");
console.log(`Current time in London: ${londonTime}`);
