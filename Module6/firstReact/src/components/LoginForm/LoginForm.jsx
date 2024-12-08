import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  // State to manage the user's email and password inputs
  const [userEmail, setUserEmail] = useState(""); // Stores the email entered by the user
  const [userPassword, setUserPassword] = useState(""); // Stores the password entered by the user

  // State for handling messages to the user (success, error, or warning)
  const [message, setMessage] = useState("");

  // Tracks the number of attempts left before locking the form
  const [attemptsLeft, setAttemptsLeft] = useState(3);

  // Toggles whether the form is visible (hidden on success or after too many failed attempts)
  const [isHidden, setIsHidden] = useState(false);

  // Function to validate email format using a regex pattern
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email format
    return emailRegex.test(email);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default browser form submission behavior

    // Validate the email format
    if (!validateEmail(userEmail)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Validate password length (minimum 6 characters)
    if (userPassword.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    // Check if the credentials match the predefined correct values
    if (userEmail === "test@example.com" && userPassword === "password123") {
      setMessage("Login successful! 🎉");
      setIsHidden(true); // Hide the form upon successful login
    } else {
      // Reduce the attempts left and update the message
      setAttemptsLeft((prev) => prev - 1);

      // If the last attempt is used, lock the form and display a message
      if (attemptsLeft === 1) {
        setMessage("Too many failed attempts. The form is now locked.");
        setIsHidden(true); // Hide the form
      } else {
        setMessage(
          `Incorrect credentials. You have ${attemptsLeft - 1} attempts left.`
        );
      }
    }
  };

  // If the form is hidden, display the relevant message
  if (isHidden) {
    return <p>{message}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm componentBox">
      {/* Email Input Field */}
      <div className="formRow">
        <label htmlFor="userEmail">
          Email Address:
          <input
            id="userEmail" // Links this input to the label for accessibility
            type="email" // Email-specific input type
            value={userEmail} // Controlled component value
            name="userEmail" // Name attribute for processing form data
            onChange={(e) => setUserEmail(e.target.value)} // Updates state on user input
            required // HTML validation for required fields
          />
        </label>
      </div>

      {/* Password Input Field */}
      <div className="formRow">
        <label htmlFor="userPassword">
          Password:
          <input
            id="userPassword" // Links this input to the label for accessibility
            type="password" // Password-specific input type
            value={userPassword} // Controlled component value
            name="userPassword" // Name attribute for processing form data
            onChange={(e) => setUserPassword(e.target.value)} // Updates state on user input
            required // HTML validation for required fields
          />
        </label>
      </div>

      {/* Submit and Reset Buttons */}
      <div className="formRow">
        <button type="submit">Login</button>{" "}
        {/* Triggers the handleSubmit function */}
        <button
          type="button" // Prevents form submission
          onClick={() => {
            // Resets the form inputs and message
            setUserEmail("");
            setUserPassword("");
            setMessage("Form reset.");
          }}
        >
          Reset
        </button>
      </div>

      {/* Display a message (e.g., success, error, or warning) */}
      {message && <p>{message}</p>}
    </form>
  );
}

export default LoginForm;
