// Creating a Randomized Delay Function with Promise-Based Success and Failure Conditions in JavaScript

function randomDelay() {
  return new Promise((resolve, reject) => {
      // Generate a random delay between 1 and 10 seconds (1000 to 10000 ms)
      const delay = Math.floor(Math.random() * 10 + 1) * 1000;
      
      // Convert delay to seconds for even/odd check
      const seconds = delay / 1000;
      
      // Use setTimeout to delay for the generated time
      setTimeout(() => {
          if (seconds % 2 === 0) {
              // Resolve the promise if the delay (in seconds) is even
              resolve(delay);
          } else {
              // Reject the promise if the delay (in seconds) is odd
              reject(delay);
          }
      }, delay);
  });
}

// Testing the randomDelay function with .then and .catch
randomDelay()
  .then((delay) => {
      console.log(`Success: There was a delay of ${delay / 1000} seconds.`);
  })
  .catch((delay) => {
      console.log(`Failure: Delay of ${delay / 1000} seconds was considered a failure.`);
  });