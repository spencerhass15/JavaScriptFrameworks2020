// Import useEffect here
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [hasError, setHasError] = useState(false);

  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    setIsLoading(true);
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => {
        setQuote(response.data[0]);
      })
      .catch(() => {
        setHasError(true);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <body class="bg-warning text-center">
      <img
        src="https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png"
        alt=""
        width="450"
        height="423"
        class="mt-4"
      />
      <div class="container">
        {/* Display a loading message */}
        {isLoading && <p>Loading..</p>}

        {/* Display an error message if the API fails */}
        {hasError && (
          <div>Unexpected Error</div>
        )}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
