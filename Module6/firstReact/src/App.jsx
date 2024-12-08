import React from "react";
import Greeting from "./components/Greeting/Greeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import FullName from "./components/FullName/FullName";
import Comment from "./components/Comment/Comment";
import commentData from "./components/Comment/CommentData";
import MoviesList from "./components/MovieList/MovieList";
import Emoji from "./components/Emoji/Emoji";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div className="App">
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
      <MoviesList /> {/* Add the MoviesList Component Here */}
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      <h1>😊 Emoji Mood Changer</h1>
      <Emoji /> {/* Add the Emoji Component Here */}
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      <h1>🔑 Login Form</h1>
      <LoginForm /> {/* Added LoginForm Component */}
    </div>
  );
}

export default App;
