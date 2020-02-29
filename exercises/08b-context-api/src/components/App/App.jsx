// Import what you need from React here
import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import CreateAccount from "../CreateAccount/CreateAccount";
import Footer from "../Footer/Footer";

/**
 * "TranslatorContext" could go here or you could make it a separate component and then import it.
 */

function App() {
  /**
   * Complete me. This component should be similar to the "App" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */
  return (
    <div className="App d-flex flex-column">
      <NavBar />
      <div className="container pt-4 pb-4">
        <CreateAccount />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
// If you declared "TranslatorContext" in this file, you will need to export it.
