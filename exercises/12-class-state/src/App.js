import React from "react";
import Likes from "../src/components/Likes/Likes";
import LessText from "../src/components/LessText";
import CharacterCount from "../src/components/CharacterCount";

// Import Likes here
// Import LessText here
// Import CharacterCount here

function App() {
  return (
    <>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 1 - Likes</h1>
          <Likes />
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 2 - Less Text</h2>
        <LessText text={"gfdsgsdfgdsfgdfsgdsfgdsfgdsfgdfsgdffgsdfsg"} />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 3 - Character Count</h1>
          <CharacterCount />
        </div>
      </div>
    </>
  );
}

export default App;
