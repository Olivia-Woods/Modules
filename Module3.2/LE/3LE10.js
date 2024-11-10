// 10. Working with the Date object.
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

// a) Print the total number of minutes that have passed so far today.
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today');

// b) Print the total number of seconds that have passed so far today.
const secondsPassed = (today.getHours() * 3600) + (today.getMinutes() * 60) + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today');

// c) Calculate and print your age.
const birthDate = new Date('1998-05-07'); // Replace with your birth date
const ageInMilliseconds = Date.now() - birthDate.getTime();
const ageInDate = new Date(ageInMilliseconds);

const years = ageInDate.getUTCFullYear() - 1970; // Subtracting 1970 to get years
const months = ageInDate.getUTCMonth(); // Get months (0-11)
const days = ageInDate.getUTCDate() - 1; // Get days (1-31) and subtract 1

console.log(`I am ${years} years, ${months} months and ${days} days old`);

// d) Function to calculate and return the amount of days in between two given dates.
function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
    const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));
    return diffDays;
}

// Example usage of daysInBetween function.
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-10-21');
console.log(`Days between ${date1.toDateString()} and ${date2.toDateString()}:`, daysInBetween(date1, date2));