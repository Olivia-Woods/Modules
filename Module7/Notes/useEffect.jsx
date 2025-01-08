import React, { useState, useEffect } from "react";

// A functional component that displays a clock
function DigitalClock() {
  // State to hold the current date and time
  const [time, setTime] = useState(new Date());

  // useEffect runs after the component renders
  useEffect(() => {
    // Set up an interval that updates the time every second
    const intervalId = setInterval(() => {
      setTime(new Date()); // Update state with the current time
      console.log("Clock ticked"); // Log the update for debugging
    }, 1000);

    console.log("Clock component mounted");

    // Cleanup function: clears the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      console.log("Clock component unmounted");
    };
  }, []); // Empty dependency array: runs only once on mount

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default DigitalClock;
