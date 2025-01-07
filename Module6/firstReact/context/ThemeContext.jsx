import { createContext, useState } from "react";

const themes = {
  light: {
    foreground: "#2E2E2E",
    background: "#E6E6FA",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const isDarkMode = theme === themes.dark;

  const toggleTheme = () => {
    setTheme(isDarkMode ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
