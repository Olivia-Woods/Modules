// src/components/ThemedComponent.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemedComponent = () => {
  const { theme, isDarkMode, toggleTheme } = useContext(ThemeContext);

  // Inline styles using the theme colors
  const appStyles = {
    backgroundColor: theme.background,
    color: theme.foreground,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  };

  return (
    <div style={appStyles}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: isDarkMode ? "#ffffff" : "#333333",
          color: isDarkMode ? "#333333" : "#ffffff",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;
