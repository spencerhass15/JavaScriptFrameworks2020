import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    quote: "",
    isLoading: true,
    hasError: false
  };
  componentDidMount() {
    axios("https://michael-scott-api.herokuapp.com/v1/quotes")
      .then(response => this.setState({ quote: response.data }))
      .catch(err => this.setState({ hasError: true }))
      .then(() => this.setState({ isLoading: false }));
  }
  render() {
    return (

      <body class="bg-warning text-center">
        <h1>Michael Scott</h1>
        <img src="https://raw.githubusercontent.com/kbohinski/Michael-Scott-API/master/prisonMike.png"
          alt=""
          width="450"
          height="423"
          class="mt-4"
        />
        <div class="container">
          <blockquote id="quote" class="blockquote bg-dark text-white border-0 mb-4">
            {this.state.quote}
            {this.state.isLoading && <p>Loading ...</p>}
            {this.state.hasError && <p>There is an error</p>}
          </blockquote>
        </div>
      </body>
    );
  }
}
export default App;