import React, { useState } from "react";
import SingleCat from "./SingleCat";

const initialCats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx Jubatus",
    image: "./cheetah.jpg",
  },
  { id: 2, name: "Cougar", latinName: "Puma Concolor", image: "./cougar.jpg" },
  { id: 3, name: "Jaguar", latinName: "Panthera Onca", image: "./jaguar.jpg" },
];

function BigCats() {
  const [cats, setCats] = useState(initialCats);

  // Sort alphabetically by name
  const sortAlphabetically = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  // Reverse the current list
  const reverseList = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  return (
    <div style={{ padding: "16px" }}>
      <h1 style={{ color: "#FF93D5" }}>Big Cats</h1>
      <div style={{ marginBottom: "16px", textAlign: "center" }}>
        <button
          onClick={sortAlphabetically}
          style={{
            backgroundColor: "#FF93D5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            margin: "0 8px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          Sort Alphabetically
        </button>
        <button
          onClick={reverseList}
          style={{
            backgroundColor: "#FF93D5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            margin: "0 8px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          Reverse List
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {cats.map((cat) => (
          <li key={cat.id} style={{ marginBottom: "16px" }}>
            <SingleCat
              name={cat.name}
              latinName={cat.latinName}
              image={cat.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
