// Import React
import React from "react";

// Reusable Component to Display a SINGLE PART of a Name
function NamePart(props) {
  return (
    // The value prop is displayed inside a <span> element with a specific class.
    <span className="NamePart">{props.value}</span>
  );
}

// Component to Display a FULL Name
function FullName(props) {
  return (
    <div className="FullName componentBox">
      {/* Add a space after the colon */}
      Full Name: <NamePart value={props.first} />{" "}
      {/* Add a space between first and middle name */}
      {props.middle && (
        <>
          <NamePart value={props.middle} />{" "}
        </>
      )}
      {/* Add a space before the last name */}
      <NamePart value={props.last} />
    </div>
  );
}

// Export the FullName Component as the Default Export
export default FullName;
