/**
 * I'm importing useState() and createContext().
 */
import React, { useState, createContext } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import CreateAccount from "../CreateAccount/CreateAccount";
import Footer from "../Footer/Footer";

/**
 * I'm initializing the Context API here.
 * Alternatively, I could create a separate component and then import it.
 */
const TranslatorContext = createContext();

function App() {
  const [language, setLanguage] = useState("en");
  /**
   * I'm wrapping all my content in the "TranslatorContext" and storing "language" and "setLanguage" in the Context API.
   * Now any descendant component can access "language" and "setLanguage" through the Context API.
   */
  return (
    <TranslatorContext.Provider value={[language, setLanguage]}>
      <div className="App d-flex flex-column">
        <NavBar />
        <div className="container pt-4 pb-4">
          <CreateAccount />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </TranslatorContext.Provider>
  );
}

export default App;
export { TranslatorContext }; // Exporting so other components can use the Context API.
