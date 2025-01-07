import React, { useContext } from "react";
import Greeting from "./components/Greeting/Greeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import FullName from "./components/FullName/FullName";
import Comment from "./components/Comment/Comment";
import commentData from "./components/Comment/CommentData";
import MoviesList from "./components/MovieList/MovieList";
import Emoji from "./components/Emoji/Emoji";
import LoginForm from "./components/LoginForm/LoginForm";
import BigCats from "./components/BigCats/BigCats";
import { ThemeProvider, ThemeContext } from "../context/ThemeContext";

function AppContent() {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        padding: "16px",
        minHeight: "100vh",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: isDarkMode ? "#ffffff" : "#333333",
          color: isDarkMode ? "#333333" : "#ffffff",
          marginBottom: "20px",
        }}
      >
        Toggle Theme
      </button>

      <h1>✨ Greeting Examples</h1>
      <Greeting name="Olivia">Hope you’re excited to dive into React!</Greeting>
      <Greeting>We’re thrilled to have you here!</Greeting>
      <Greeting name="Sophia">Let’s build something amazing today!</Greeting>
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      <h1>✨ Meet the Team</h1>
      <ProfileCard
        name="Lila Rose"
        age={22}
        bio="A flower enthusiast who loves painting sunsets and eating strawberry macarons."
      />
      <ProfileCard
        name="Sophie Belle"
        age={24}
        bio="A dreamy stargazer who’s always baking cupcakes and planning cozy movie nights."
      />
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      <h1>🌟 Displaying Full Names</h1>
      <FullName first="Olivia" middle="Amara" last="Rose" />
      <FullName first="Plain" last="Jane" />
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      <h1>💫 Comments Section</h1>
      {commentData.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      <h1>🌙 Movies List</h1>
      <MoviesList />
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      <h1>😊 Emoji Mood Changer</h1>
      <Emoji />
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      <h1>🔑 Login Form</h1>
      <LoginForm />
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      <h1>🐱 Big Cats</h1>
      <BigCats />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
