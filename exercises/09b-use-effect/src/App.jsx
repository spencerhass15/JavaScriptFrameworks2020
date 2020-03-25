// Import useEffect here
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {
  /**
   * dogImages
   * @type {Array} an array of image URLs
   * @example
   * [
   *     "https://images.dog.ceo/breeds/terrier-scottish/n02097298_7694.jpg",
   *     "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg"
   * ]
   */
  const [dogImages, setDogImages] = useState([]);
  const [amount, setAmount] = useState(1);

  /**
   * You may need to set something else in state
   */

  /**
   * Make an AJAX call with the useEffect hook
   */

  useEffect(() => {
    (async () => {
      const response = await axios(`https://dog.ceo/api/breed/labrador/images/random/${amount}`);
      setDogImages(response.data.message);
    })();
  }, [amount]);

  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Attach an event handler */}
      <select onChange={e => setAmount(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <div className="container">
        {dogImages &&
          dogImages.map((dogImage, idx) => {
            return <img key={`dog-${idx}`} height="200" src={dogImages} />;
          })}
      </div>
    </div>
  );
}

export default App;
