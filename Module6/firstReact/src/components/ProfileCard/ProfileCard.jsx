import React from "react";
import "./ProfileCard.css"; // External CSS for Styling

function ProfileCard({ name, age, bio }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const nameStyle = {
    fontSize: "1.5em",
    color: "#333",
    marginBottom: "8px",
  };

  return (
    <div style={cardStyle} className="profile-card">
      <h2 style={nameStyle}>{name}</h2>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Bio:</strong> {bio}
      </p>
    </div>
  );
}

export default ProfileCard;
