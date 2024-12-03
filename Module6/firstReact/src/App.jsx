import React from "react";
import Greeting from "./components/Greeting";
import ProfileCard from "./ProfileCard";
import FullName from "./components/FullName";
import Comment from "./components/Comment";
import commentData from "./components/CommentData";

function App() {
  return (
    <div className="App">
      <h1>✨ Greeting Examples ✨</h1>
      <Greeting name="Olivia">Hope you’re excited to dive into React!</Greeting>
      <Greeting>We’re thrilled to have you here!</Greeting>
      <Greeting name="Sophia">Let’s build something amazing today!</Greeting>

      <hr className="divider" />

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

      <hr className="divider" />

      <h1>🌟 Displaying Full Names 🌟</h1>
      <FullName first="Olivia" middle="Amara" last="Rose" />
      <FullName first="Plain" last="Jane" />

      <hr className="divider" />

      <h1>📝 Comments Section 📝</h1>
      {commentData.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

export default App;
