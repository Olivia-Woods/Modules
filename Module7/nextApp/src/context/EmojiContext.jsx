"use client";

import { createContext, useContext, useState } from "react";

// Create Context
const EmojiContext = createContext();

// Context Provider
export function EmojiProvider({ children }) {
  const [isHappy, setIsHappy] = useState(true);

  // Function Toggling Emoji State
  const toggleEmoji = () => {
    setIsHappy((prev) => !prev);
  };

  return (
    <EmojiContext.Provider value={{ isHappy, toggleEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
}

// Custom Hook to Access EmojiContext
export function useEmoji() {
  return useContext(EmojiContext);
}
