import React from "react";
import "./App.css";
import WordLength from "../src/components/WordLength/WordLength";
import LessText from "../src/components/LessText/LessText";
import GroceryList from "../src/components/GroceryList/App";

function App() {
  return (
    <div className="App">
      <GroceryList />
    </div>
  );
}

export default App;
