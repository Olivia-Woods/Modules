import { useState } from "react";

function DisplayEmoji({ isHappy }) {
  return (
    <span role="img" aria-label={isHappy ? "happy" : "lover"}>
      {isHappy ? "😊" : "🥰"}
    </span>
  );
}

function UpdateEmoji({ handleEmojiUpdate }) {
  return <button onClick={handleEmojiUpdate}>Toggle mood</button>;
}

export default function Emoji() {
  const [isHappy, setIsHappy] = useState(true);

  function handleEmojiUpdate() {
    setIsHappy(!isHappy);
  }

  return (
    <div className="Emoji">
      <DisplayEmoji isHappy={isHappy} />

      <UpdateEmoji handleEmojiUpdate={handleEmojiUpdate} />
    </div>
  );
}
