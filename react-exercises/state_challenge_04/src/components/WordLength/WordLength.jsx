import React, { useState } from "react";

const WordLength = () => {
  const [count, setCount] = useState(0);
  return (
    <body>
      <div>
        <h1>Records the amount of words you type!</h1>
        <h2>Word Count:{count} </h2>
        <input onChange={e => setCount(e.target.value.length)} />
      </div>
    </body>
  );
};

export default WordLength;
