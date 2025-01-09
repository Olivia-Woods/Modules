import { useState } from "react";

export default function useFormInput(initialValue = "") {
  const [value, setValue] = useState(initialValue); // Manages the input value state.

  // Handler function to update value
  function handleChange(event) {
    setValue(event.target.value);
  }

  // Function to reset the input field
  function reset() {
    setValue("");
  }

  return {
    value, // Current input value
    onChange: handleChange, // Change handler for input
    reset, // Function to reset the field
  };
}
