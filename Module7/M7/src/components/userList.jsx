import React, { useReducer } from "react";
import axios from "axios"; // Ensure axios is installed

// Reducer function to handle different states
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { loading: true, users: [], error: "" }; // Loading state
    case "FETCH_SUCCESS":
      return { loading: false, users: action.payload, error: "" }; // Success state
    case "FETCH_ERROR":
      return { loading: false, users: [], error: action.payload }; // Error state
    default:
      return state;
  }
}

// Main UserList component
export default function UserList() {
  const initialState = { loading: false, users: [], error: "" }; // Initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to fetch user data when button is clicked
  const fetchData = () => {
    dispatch({ type: "FETCH_START" }); // Trigger loading state
    axios
      .get("https://jsonplaceholder.typicode.com/users") // API request
      .then((response) =>
        dispatch({ type: "FETCH_SUCCESS", payload: response.data })
      )
      .catch((error) =>
        dispatch({ type: "FETCH_ERROR", payload: error.message })
      );
  };

  return (
    <div className="UserList componentBox">
      <h2>User List (Click to Fetch)</h2>
      <button onClick={fetchData}>Fetch Users</button>{" "}
      {/* Button to fetch users */}
      {state.loading && <div>Loading users...</div>} {/* Loading message */}
      {state.error && <div className="error">Error: {state.error}</div>}{" "}
      {/* Error message */}
      {!state.loading &&
        state.users.map((user) => (
          <div key={user.id} className="UserCard">
            <h3>User #{user.id}</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}{" "}
      {/* Display list of users */}
    </div>
  );
}
