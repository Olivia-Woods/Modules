import React from "react";

// Avatar Component
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

// UserInfo Component
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

// FormattedDate Component
function FormattedDate(props) {
  return <div className="Comment-date">{props.date.toLocaleString()}</div>;
}

// Comment Component
function Comment(props) {
  return (
    <div className="Comment componentBox">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <FormattedDate date={props.date} />
    </div>
  );
}

export default Comment; // Export Comment as the Default
