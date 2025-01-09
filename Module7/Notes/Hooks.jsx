function sum(a, b) {
  return a + b; // Simple computation without state management.
}

console.log(sum(2, 3)); // Output: 5

// Purpose: A regular function simply takes two values, adds them, and returns the result.
// No React-specific behaviour: It doesn’t remember any internal state or trigger updates.

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Hook to manage state.

  const increment = () => setCount(count + 1); // Updates the state.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Here, useState takes care of the internal data (count) and allows the component to “remember” the current count value even after it re-renders.
// The setCount function updates the state, causing React to re-render the component with the new value.
