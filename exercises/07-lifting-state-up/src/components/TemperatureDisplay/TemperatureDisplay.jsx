import React from "react";
import PropTypes from "prop-types";

function TemperatureDisplay(props) {
  return <div>
    <div className="h4">Current Temperature:</div>
    <div className="h1" >
      {props.temperature} &deg; {props.scale}
    </div >
  </div>;
}

TemperatureDisplay.propTypes = {
  temperature: PropTypes.number.isRequired,
  scale: PropTypes.string.isRequired
};

export default TemperatureDisplay;
