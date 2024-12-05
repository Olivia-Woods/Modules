import React, { useState } from "react";

const Emoji = () => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevMood) => !prevMood);
  };

  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
      <p>{isHappy ? "😊" : "😢"}</p>
      <button
        onClick={toggleMood}
        style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}
      >
        Change Mood
      </button>
    </div>
  );
};

export default Emoji;
