// Scheduling setTimeout
function startInvasion(city, delay) {
    setTimeout(() => {
        console.log(`Aleins have invaded ${city}!`);
    }, delay);
}

startInvasion("Perth", 2000);