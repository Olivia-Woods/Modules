import React from "react";
import "./Comment.css";

// Avatar Component
function Avatar({ user }) {
  return <img className="Avatar" src={user.avatarUrl} alt={user.name} />;
}

// UserInfo Component
function UserInfo({ user }) {
  return (
    <div className="UserInfo">
      <Avatar user={user} />
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
}

// FormattedDate Component
function FormattedDate({ date }) {
  return <div className="Comment-date">{date.toLocaleString()}</div>;
}

// Comment Component
function Comment({ author, text, date }) {
  // Destructuring Props Here
  return (
    <div className="Comment componentBox">
      <UserInfo user={author} />
      <div className="Comment-text">{text}</div>
      <FormattedDate date={date} />
    </div>
  );
}

export default Comment; // Export Comment as the Default
