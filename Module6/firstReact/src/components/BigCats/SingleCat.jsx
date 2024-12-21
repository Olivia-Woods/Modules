import React from "react";

function SingleCat({ name, latinName, image }) {
  return (
    <div
      style={{
        border: "1px solid #FF93D5",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#FFEFFC",
      }}
    >
      <img
        src={`${image}`}
        alt={name}
        style={{ width: "20%", borderRadius: "8px" }}
      />
      <h2 style={{ color: "#FF93D5" }}>{name}</h2>
      <p>
        <em>{latinName}</em>
      </p>
    </div>
  );
}

export default SingleCat;
