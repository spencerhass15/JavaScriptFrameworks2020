import React, { useState, useContext } from "react";
import "./App.css";
import axios from "axios";
import { CookieContext } from "../src/Context/SessionContext";

function App({ history }) {
  /**
   * User input
   */
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handling AJAX loading and errors
   */
  const [errorMessage, setErrorMessage] = useState(null);
  const [hasError, setError] = useState(false);
  /**
   * When a user is logged in, a UUID token is stored in a the Context API.
   */
  const [uuid, setUUID] = useContext(CookieContext);
  const handleSubmit = async e => {
    e.preventDefault();

    let response;
    try {
      response = await axios.post(
        "http://localhost:7000/cookie/login",
        {
          username,
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      /**
       * Expected response, if the credentials are correct, you will get a UUID session token from the server.
       */
      if (response.data.message) {
        /**
         * Storing the UUID session token in the Context API,
         * so that are components can access it without having to prop drill
         */
        setUUID(response.data.uuid);
        history.push("/Cookie/Users");
      }
    } catch (error) {
      /**
       * If the credentials are wrong, display an error message
       */
      setError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Sign In</h1>
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="mr-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control mr-3"
              onChange={e => setUserName(e.target.value)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="mr-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control mr-3"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="form-text">
          <small>
            The username is <em>username</em> and the password is{" "}
            <em>password</em>
          </small>
        </p>
        {hasError && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
