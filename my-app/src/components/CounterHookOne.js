import React from "react";
import useCounter from "./hooks/useCounter";

function CounterHookOne() {
  const [count, increment, decrement, reset] = useCounter(0, 1);

  return (
    <div>
      <h2>CounterHookOne : {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterHookOne;
