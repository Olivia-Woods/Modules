import React from "react";
import Greeting from "./components/Greeting";
import ProfileCard from "./ProfileCard";
import FullName from "./components/FullName";
import Comment from "./components/Comment";

function App() {
  // Example data for the Comment Component
  const commentData = [
    {
      author: {
        name: "Olive Garden",
        avatarUrl:
          "https://www.thetutuguru.com.au/wp-content/uploads/2024/09/Olive-Tree-Topiary-1.jpg",
      },
      text: "This is a great example of a compositional React component!",
      date: new Date(),
    },
    {
      author: {
        name: "Olivia Woods",
        avatarUrl:
          "https://i.pinimg.com/736x/5b/6f/cb/5b6fcb70b51f09eeb0dd0a42d6eee546.jpg",
      },
      text: "I love how reusable these components are!",
      date: new Date(),
    },
  ];

  return (
    <div className="App">
      <h1>✨ Greeting Examples ✨</h1>
      {/* Render Greetings - If I Remove = DEFAULT */}
      <Greeting name="Olivia">Hope you’re excited to dive into React!</Greeting>
      <Greeting>We’re thrilled to have you here!</Greeting>
      <Greeting name="Sophia">Let’s build something amazing today!</Greeting>
      {/* Divider */}
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      {/* Render Profile Cards */}
      <h1>💕 Meet the Team! 💕</h1>
      <ProfileCard
        name="Lila Rose"
        age={22}
        bio="A flower enthusiast who loves painting sunsets and eating strawberry macarons."
      />
      <ProfileCard
        name="Sophie Belle"
        age={24}
        bio="A dog mum, bookworm, and lover of pink stationery. Can’t resist peppermint tea!"
      />
      <ProfileCard
        name="Mia Luna"
        age={21}
        bio="A dreamy stargazer who’s always baking cupcakes and planning cozy movie nights."
      />
      <ProfileCard
        name="Ella Grace"
        age={23}
        bio="A pilates lover, cake artist, and queen of cute DIY crafts."
      />
      {/* Divider */}
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      {/* Render FullName Component */}
      <h1>🌟 Displaying Full Names 🌟</h1>
      <FullName first="Olivia" middle="Amara" last="Rose" />
      <FullName first="Plain" last="Jane" /> {/* Example Without Middle Name */}
      {/* Divider */}
      <hr
        style={{
          margin: "32px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />
      {/* Render Comments Section */}
      <h1>📝 Comments Section 📝</h1>
      {commentData.map((comment, index) => (
        <Comment
          key={index} // Use a Unique Key for Each Comment
          author={comment.author}
          text={comment.text}
          date={comment.date}
        />
      ))}
    </div>
  );
}

export default App;
