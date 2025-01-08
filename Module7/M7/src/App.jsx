import { useState } from "react";
import UseRefExample from "./components/useRef";
import UseReducerExample from "./components/useReducer";
import UserList from "./components/userList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Example State

  return (
    <>
      {/* Heading */}
      <h1>useRef, useReducer, and API Data Fetch Example</h1>

      {/* Optional Count State */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>

      {/* UseRefExample Component Integration */}
      <UseRefExample />

      {/* UseReducerExample Component Integration */}
      <UseReducerExample />

      {/* Updated UserList Component Integration */}
      <div className="user-list-section">
        <h2>Control When to Fetch User Data:</h2>
        <UserList />
      </div>

      <p className="read-the-docs">
        Click the buttons to interact with the examples above.
      </p>
    </>
  );
}

export default App;
