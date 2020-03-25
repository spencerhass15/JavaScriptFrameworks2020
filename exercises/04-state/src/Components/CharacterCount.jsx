import React, { useState } from "react";
const CharacterCount = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <textarea onChange={e => setCount(e.target.value.length)} />
            <p>Character Count: {count} </p>
        </div>
    );
};
export default CharacterCount;