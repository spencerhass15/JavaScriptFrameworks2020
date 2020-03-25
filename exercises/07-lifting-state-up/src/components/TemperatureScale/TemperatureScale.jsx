import React from "react";
import PropTypes from "prop-types";

function TemperatureScale(props) {
  // Complete me
  return <div
    className="btn-group"
    role="group"
    aria-label="Convert temperature"
    value={props.display}
    onChange={e => props.setScale(e.target.value)}
  >
    <button
      className="btn btn-outline-primary"
      onClick={() => props.setScale("F")}
    >
      Fahrenheit
  </button>
    <button
      className="btn btn-outline-primary"
      onClick={() => props.setScale("C")}
    >
      Celsius
  </button>
  </div>;
}

TemperatureScale.propTypes = {
  setScale: PropTypes.func.isRequired
};

export default TemperatureScale;
