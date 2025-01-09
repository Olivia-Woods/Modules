import { useState } from "react";
import useFormInput from "../hooks/useFormInput";

export default function SubscribeForm() {
  const firstNameInput = useFormInput("Olivia"); // Custom hook for first name
  const emailInput = useFormInput("olivia@gmail.com"); // Custom hook for email
  const [status, setStatus] = useState("");

  const handleSubscribe = () => {
    setStatus("Thanks for subscribing!");
    firstNameInput.reset(); // Clear the first name input
    emailInput.reset(); // Clear the email input
  };

  return (
    <div>
      <label>
        First Name:
        {/* Spread only the "value" and "onChange" */}
        <input
          type="text"
          value={firstNameInput.value}
          onChange={firstNameInput.onChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={emailInput.value}
          onChange={emailInput.onChange}
        />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}
