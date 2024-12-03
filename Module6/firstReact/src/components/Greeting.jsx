import React from "react";

function Greeting({ name, children }) {
  const greetingMessage = name ? `Hello, ${name}!` : "Hello, World!";

  return (
    <div
      style={{
        padding: "16px",
        margin: "16px",
        backgroundColor: "#FFEFFC",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "#FF93D5" }}>{greetingMessage}</h2>
      <p>{children || "Welcome to the class!"}</p>
    </div>
  );
}

export default Greeting;
