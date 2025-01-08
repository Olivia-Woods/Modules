import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./styles/index.css";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";

// Error Fallback Component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // Optionally reset the application state
          console.log("Resetting application state...");
        }}
      >
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
