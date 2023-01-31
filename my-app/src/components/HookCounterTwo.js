import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(0);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count{count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement
      </button>
      <button onClick={incrementFive}>incrementFive</button>
    </div>
  );
}

export default HookCounterTwo;
