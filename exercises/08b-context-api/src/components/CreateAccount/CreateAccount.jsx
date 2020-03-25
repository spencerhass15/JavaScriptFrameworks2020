// Import what you need from React
import React, { useContext } from "react";
import translations from "./CreateAccountTranslations.json";
import { TranslatorContext } from "../../contexts/TranslatorContext";

function CreateAccount() {
  const [language, setLanguage, name] = useContext(TranslatorContext);
  console.log({ TranslatorContext })
  /**
   * You will need to add something here. This component should be similar to the "CreateAccount" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */

  /**
   * Replace "en" with a constant or variable.
   */
  const t = translations[language];
  console.log(name);

  /**
   * You do not have to change anything below this line.
   */
  return (
    <>
      <h1 className="h3">{t["Create a New Account"]}</h1>
      <p className="lead">{t["It’s quick and easy."]}</p>
      <form>
        <div className="row form-group">
          <div className="col">
            <label htmlFor="firstName">{t["First Name"]}</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="col">
            <label htmlFor="lastName">{t["Last Name"]}</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-6">
            <label htmlFor="email">{t["Email"]}</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-6">
            <label htmlFor="password">{t["Password"]}</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>
        <p>
          <small>
            {
              t[
              "By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time."
              ]
            }
          </small>
        </p>
        <button type="submit" className="btn btn-lg btn-success" onClick={() => setLanguage("en")}>
          {t["Sign Up"]}
        </button>
      </form>
    </>
  );
}

export default CreateAccount;
