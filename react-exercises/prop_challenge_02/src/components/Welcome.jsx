import React from "react";

function Welcome(props) {
  return <h1>Hello,{props.name}</h1>;
}

Welcome.defaultProps = {
  name: "user"
};
export default Welcome;
