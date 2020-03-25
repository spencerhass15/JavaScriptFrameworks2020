import React from "react";
import "./App.css";
import LessText from "./Components/LessText";
import CharacterCount from "./Components/CharacterCount";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 1 - Less Text</h2>
        <LessText text={'Hello Spencer'} maxLength={10} />
      </div>

      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          <CharacterCount />
        </div>
      </div>
    </>
  );
}

export default App;
