import { useRef, useState } from "react";

function UseRefExample() {
  // Step 2: Create a state to track input value changes (optional for comparison purposes).
  const [text, setText] = useState(""); // State variable `text` to store input value.

  // Step 3: Create a ref using useRef for the input field.
  const inputRef = useRef(); // Create a ref for the input element.

  // Step 4: Create a function to focus the input field using the ref.
  const focusInput = () => {
    if (inputRef.current) {
      // Ensure the ref is attached to the input element.
      inputRef.current.focus(); // Focus the input field.
    }
  };

  // Step 5: Create a function to clear the input field without causing a re-render.
  const clearInput = () => {
    if (inputRef.current) {
      // Ensure the ref is attached to the input element.
      inputRef.current.value = ""; // Clear the input value without re-rendering the component.
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Hook Exercise</h1>
      <input
        type="text"
        placeholder="Type something..."
        ref={inputRef} // Attach the ref to this input element.
        onChange={(e) => {
          setText(e.target.value); // Update state on input change.
        }}
      />
      <p>State Value: {text}</p>{" "}
      {/* Display the current value of the state variable `text`. */}
      <button onClick={focusInput}>Focus Input</button>{" "}
      {/* Button to focus the input field. */}
      <button onClick={clearInput}>Clear Input</button>{" "}
      {/* Button to clear the input field. */}
    </div>
  );
}

export default UseRefExample;
