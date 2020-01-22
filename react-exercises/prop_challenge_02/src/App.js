import React from "react";
import "./App.css";
import Welcome from "../src/components/Welcome";
/****
 *   As a developer, I would like to create a component that welcomes users.
 *   The component should accept a prop named name, which accepts a string.
 *   If name is not provided to the component, the component should render welcome user.
 *   To achieve this please use default props.
 *
 *   Developer instructions:
 *   1) Create a folder name components
 *   2) import react
 *   3) render the proper to the screen using the h1 tags
 *
 *
 *
 *
 */

function App() {
  return (
    <div className="App">
      <Welcome name="Jamal" />
      <Welcome name="Jamal" />
      <Welcome />
    </div>
  );
}

export default App;
