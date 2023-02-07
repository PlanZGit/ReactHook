import React from "react";
import useCounter from "./hooks/useCounter";

function CounterHookTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 10);

  return (
    <div>
      <h2>CounterHookTwo : {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterHookTwo;
