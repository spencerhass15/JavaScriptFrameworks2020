import React, { useState } from "react";
import LoggedInContent from "../LoggedInContent/LoggedInContent";
import axios from "axios";
import Cookies from "js-cookie";
function App() {
  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  /**
   * Be sure to set this when a user tries to login with invalid credentials.
   */
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * You may need to add more things to state
   */



  const logout = () => {
    Cookies.remove("token");
    SetIsUserLoggedIn(false);
  };



  const [isUserLoggedIn, SetIsUserLoggedIn] = useState(
    !!Cookies.get("token")
  );

  const login = token => {
    Cookies.set("token", token, { expires: 1 });
    SetIsUserLoggedIn(true);
    setIsLoading(false);
  };

  const handleLoginRequest = e => {
    setIsLoading(true);
    e.preventDefault();
    // can we just add an s to http (https) to make it secure or is that
    // something that is controlled server side?
    axios("http://localhost:7000/jwt/login", {
      method: "POST",
      headers: {

        "Content-Type": "application/json"
      },
      data: {
        username: username,
        password: password
      }
    })
      .then(
        response => login(response.data.token)
      )
      .catch(err => {
        setErrorMessage(err.response.data.message);
      })
      .then(resp => setIsLoading(false));
  };

  if (isUserLoggedIn) {
    return <LoggedInContent logout={logout} />;
  }
  else

    /**
     * If the user is logged in, you should render the <LoggedInContent /> component instead.
     */
    return (
      <div className="container mt-2 mb-5">
        <h1>Login</h1>
        <form className="form-inline mb-2" onSubmit={handleLoginRequest}>
          <div className="form-group">
            <label htmlFor="username" className="mr-2">
              Username
          </label>
            <input
              type="text"
              id="username"
              className="form-control mr-3"
              required={true}
              value={username}
              onChange={e => setUsername(e.target.value)}
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
              required={true}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            Login
        </button>
        </form>
        <p className="form-text">
          <small>
            The username is <em>username</em> and the password is{" "}
            <em>password</em>
          </small>
        </p>
        {isLoading && <p>Loading ...</p>}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    );
}

export default App;
