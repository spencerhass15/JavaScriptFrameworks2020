import React, { useState } from "react";

const WordLength = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Word Count:{count} </h1>
      <input onChange={e => setCount(e.target.value.length)} />
    </div>
  );
};

export default WordLength;
