import React, { useState } from "react";

const LessText = ({ text, maxLength }) => {
  const [hidden, setHidden] = useState(false);
  return (
    <div>
      {!hidden ? text.substr(0, maxLength).trim() : text}
      <div>
        <button onClick={() => setHidden(true)}>Read More</button>
        <button onClick={() => setHidden(false)}>Read Less</button>
      </div>
    </div>
  );
};

export default LessText;
