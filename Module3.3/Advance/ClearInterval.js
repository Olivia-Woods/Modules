function startLoving(city, interval, numberOfLove) {
    let loveCount = 0; // Counter to keep track of how many loves have occurred

    // Set an interval to log the love message
    const loveIntervalId = setInterval(() => {
        console.log(`The aliens are loving ${city} again!`); // Log the love message
        loveCount++; // Increment the love counter

        // Check if the number of loves has reached the specified limit
        if (loveCount >= numberOfLove) {
            clearInterval(loveIntervalId); // Stop the interval when the limit is reached
            console.log(`The love on ${city} has stopped after ${numberOfLove} loves.`); // Log a stopping message
        }
    }, interval); // Time interval in milliseconds
}

// Example usage: Start loving on "Perth" every 2000 milliseconds, for a total of 5 loves.
startLoving("Perth", 2000, 5);