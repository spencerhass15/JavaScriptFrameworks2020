// Import what you need from React
import React, { useContext } from "react";
import translations from "./LoginTranslations.json";
import { TranslatorContext } from "../../contexts/TranslatorContext";

function Language() {
  /**
   * You will need to add something here. This component should be similar to the "CreateAccount" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */

  const [language] = useContext(TranslatorContext);

  /**
   * Replace "en" with a constant or variable.
   */
  const t = translations[language];

  /**
   * You do not have to change anything below this line.
   */
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="email"
        placeholder={t["Email"]}
        aria-label={t["Email"]}
      />
      <input
        className="form-control mr-sm-2"
        type="password"
        placeholder={t["Password"]}
        aria-label={t["Password"]}
      />
      <button className="btn btn-dark my-2 my-sm-0" type="submit">
        {t["Login In"]}
      </button>
    </form>
  );
}

export default Language;
