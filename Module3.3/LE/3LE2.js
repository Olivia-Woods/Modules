// Delay Message Function with Timers

// 1. Original delayMsg function.
// The function is intended to display a message after a specified delay.

function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`);
}

// Part A: Order of Execution
// Tests:
setTimeout(delayMsg, 1000, '#1: Delayed by 1000ms');
setTimeout(delayMsg, 2000, '#2: Delayed by 2000ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');

// Explanation of Execution Order:
// - `delayMsg('#4: Not delayed at all')` is called immediately without any delay, so it will print first.
// - `setTimeout(delayMsg, 0, '#3: Delayed by 0ms');` adds a message to the event queue with a minimal delay but runs after the immediate calls.
// - `setTimeout(delayMsg, 20, '#2: Delayed by 20ms');` will execute next due to the 20ms delay.
// - `setTimeout(delayMsg, 100, '#1: Delayed by 100ms');` will print last after 100ms.


// Part B: Rewrite delayMsg as an Arrow Function
const delayMsgArrow = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

// Part C & D: Adding a Fifth Test with a Long Delay and Preventing it with clearTimeout**
// Using a timeout ID for the fifth test so we can clear it.

let longDelayTimeout = setTimeout(delayMsgArrow, 10000, '#5: Delayed by 10 seconds');
// The returned timeoutID is a positive integer value.

// Clear the fifth timeout to prevent it from printing.
clearTimeout(longDelayTimeout);

// Explanation Notes
// 1. `delayMsg` and `delayMsgArrow` functions both print messages, with the latter using arrow syntax.
// 2. `setTimeout` schedules messages to print after specified delays, adding them to the event queue after the current code completes.
// 3. `clearTimeout` is used to cancel the fifth timeout, ensuring that `#5` never prints.