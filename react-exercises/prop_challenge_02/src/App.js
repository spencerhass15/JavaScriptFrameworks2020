import React from "react";
import "./App.css";
import Welcome from "../src/components/Welcome";
/****
 *   As a developer, I would like to create a component that welcomes users.
 *   The component should accept a prop "name", which accepts a string.
 *   If "name" is provided, the component should render "Welcome _____."
 *   If "name" is not provided to the component, the component should render "Welcome user."
 *   To achieve this, please use default props.
 *
 *   Developer instructions:
 *   1) Create a folder name components
 *   2) Create a welcome component
 *   2) The welcome component should import react
 *   3) The welcome component should render the proper to the screen using the h1 tags
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
