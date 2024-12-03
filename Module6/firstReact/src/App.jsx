import React from "react";
import Greeting from "./Greeting";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div className="App">
      <h1>✨ Greeting Examples ✨</h1>

      {/* Render Greetings */}
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
        bio="A cat mom, bookworm, and lover of pastel stationery. Can’t resist bubble tea!"
      />
      <ProfileCard
        name="Mia Luna"
        age={21}
        bio="A dreamy stargazer who’s always baking cupcakes and planning cozy movie nights."
      />
      <ProfileCard
        name="Ella Grace"
        age={23}
        bio="A yoga lover, latte artist, and queen of cute DIY crafts."
      />
    </div>
  );
}

export default App;
