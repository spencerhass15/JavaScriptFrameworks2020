import React, { useState } from "react";
import "./App.css";
import countries from "../src/assets/countries.json";
import states from "../src/assets/states.json";

function App() {
  const [values, setValues] = useState({});
  console.log(values);
  const handleChange = e => {
    /**
     * Adds or updates based on the HTML elements name.
     */
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const [displayResults, setDisplayResults] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setDisplayResults(true);
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={values.adressLine1}
          onChange={handleChange}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select
          id="state" name="state" className="form-control" name="state"
          value={values.state} onChange={handleChange}
        >
          <option value=""></option>
          {states.map((state, idx) => {
            return (
              <option value={state} key={`state ${idx}`}>
                {state}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          value={values.postalCode}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select
          id="country" name="country" className="form-control" name="country" value={values.country} onChange={handleChange}
        >
          <option value=""></option>
          {countries.map((country, idx) => {
            return (
              <option value={country} key={`country ${idx}`}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary" >
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {
        displayResults && (
          <div className="card card-body bg-light mt-4 mb-4">
            Results:
          <ul className="list-unstyled mb-0">
              {Object.values(values).map((value, idx) => {
                return <li key={`value-${idx}`}>{value}</li>;
              })}
            </ul>
          </div>
        )
      }
    </form >
  );
}

export default App;
