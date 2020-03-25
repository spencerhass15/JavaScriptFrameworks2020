import React from "react";
import "./App.css";
import Welcome from "./components/Welcome"
// import something here

function App() {
  return <div className="App">
          <Welcome name="Spencer" />
          <Welcome name="Spencer" />
          <Welcome/>
        </div>;
}
export default App;
