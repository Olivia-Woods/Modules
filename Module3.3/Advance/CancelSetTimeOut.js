// Cancel setTimeout with Unique Identifier
let invasionTimeout; // Variable to Hold the Timeout ID

function startInvasion(city, delay) {
    invasionTimeout = setTimeout(() => {
        console.log(`Aliens have invaded ${city}!`);
    }, delay);
}

// Start the Invasion
startInvasion("Perth", 4000);

// Function to Cancel the Invasion
function cancelInvasion() {
    clearTimeout(invasionTimeout); // Use the Stored Timeout ID
    console.log("The invasion has been stopped!");
}

// Cancelling the Invasion
setTimeout(() => {
    cancelInvasion(); // Call this to stop the invasion before it happens.
}, 2000); // Cancel after 2 seconds.