// Debounce Decorator Function

// Debounce Function Setup:
// The `debounce` decorator will delay function execution until a specified period of inactivity.
// This example uses `printMe` to demonstrate debouncing in action.

function debounce(func, ms = 1000) {
    let timeoutId;

    // Return a wrapper function to control when the original function (func) runs
    return function(...args) {
        // Clear any previously set timeout to reset the waiting period
        clearTimeout(timeoutId);

        // Set a new timeout that calls func after the specified `ms` of inactivity
        timeoutId = setTimeout(() => func(...args), ms);
    };
}

// Part A: Debounce the `printMe` function with 1000ms of inactivity before executing.

function printMe(msg = 'Printing Debounced Message!') {
    console.log(msg);
}

// Apply Debounce Decorator
printMe = debounce(printMe);

// Part B & C: Testing the Debounced Function
// Testing with 3 calls to printMe within 300ms - only the LAST call should execute after 1000ms of inactivity.

setTimeout(() => printMe('#1: Debounced Call'), 100);   // Won't print - unless ms is lower
setTimeout(() => printMe('#2: Debounced Call'), 200);   // Won't print
setTimeout(() => printMe('#3: Debounced Call'), 300);   // Should print after 1000ms of inactivity

// The timing sequence of 100, 200, and 300 milliseconds means that:
	// The first call to printMe happens 100 ms after the script starts.
	// The second call occurs 100 ms after the first (at 200 ms total).
	// The third call happens 100 ms after the second (at 300 ms total).

// After the last call at 300 ms, there are no further calls within the following 1000 ms.
	// Therefore, the debounce timer completes, and printMe('#3: Debounced call') executes at 1300 ms (300 ms + 1000 ms of inactivity).

// Explanation Notes
// 1. Part A: `debounce(func)` decorates the function, delaying its execution until there is no new call for `ms` milliseconds.
// 2. Part B: By adding the `ms` argument, the debounce period can be customized.
// 3. Part C: `printMe` now accepts an argument `msg`, which is passed to `console.log` after the debounce period, providing flexibility with custom messages.