// Scheduling 
let count = 0; // Initialize the counter to 0

// Function that logs the current count and increments it
function callThisEvery1Seconds() {
    console.log(count); // Log the current value of count
    count++; // Increment count by 1
}

// Set an interval to call the function every 1000 milliseconds (1 second)
const intervalId = setInterval(() => {
    callThisEvery1Seconds(); // Call the function to log and increment count

    // Check if count has reached 5
    if (count >= 5) {
        clearInterval(intervalId); // Stop the interval when count reaches 5
    }
}, 1000); // Interval time in milliseconds