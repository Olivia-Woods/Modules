"use client";

import { useEmoji } from "../context/EmojiContext";
import "./Emoji.css";

function DisplayEmoji() {
  const { isHappy } = useEmoji();
  return (
    <span role="img" aria-label={isHappy ? "happy" : "lover"}>
      {isHappy ? "😊" : "🥰"}
    </span>
  );
}

function UpdateEmoji() {
  const { toggleEmoji } = useEmoji();
  return <button onClick={toggleEmoji}>Change Mood</button>;
}

export default function Emoji() {
  return (
    <div className="Emoji">
      <DisplayEmoji />
      <UpdateEmoji />
    </div>
  );
}
