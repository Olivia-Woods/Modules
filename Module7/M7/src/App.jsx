import { useState } from "react";
import UseRefExample from "./components/UseRef"; // Import UseRef Component
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Example State

  return (
    <>
      {/* Heading */}
      <h1>useRef Hook Example</h1>

      {/* Optional Count State */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>

      {/* UseRefExample Component Integration */}
      <UseRefExample />

      <p className="read-the-docs">
        Click the button to interact with the input field above.
      </p>
    </>
  );
}

export default App;
