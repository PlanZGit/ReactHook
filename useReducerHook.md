# useReducer

- useReducer is a hook that is used for state management
- useReducer is related to reducer functions
- useReducer(reducer, initialState)
- reducer(currentState, action)
- useReducer is basicly changing the state of React components

## Intro

Whats the difference?

- useState is built using useReducer
  When to useReducer vs useState?

### Array.prototype.reduce()

    const array1 = [1, 2, 3, 4];
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue, initialValue);

    console.log(sumWithInitial);
    // Expected output: 10

### reduce in JavaScript & useReduce in React

    array.reduce(reducer,initialValue) //JS
    useReducer(reducer,initialValue) //React

    singleValue = reducer(accumulator, itemValue) //JS
    newState = reducer(currentState, action) //React

    reduce method returns a single value
    useReducer returns a pair of values [newState, dispatch]

## Example 1 useReducer simple state & action

_CounterOne.js_

    import React, { useReducer } from "react";
    const initialState = 0;
    const reducer = (state, action) => {
      switch (action) {
        case "increment":
          return state + 1;
        case "decrement":
          return state - 1;
        case "reset":
          return initialState;
        default:
          return state;
      }
    };

    function CounterOne() {
      const [count, dispatch] = useReducer(reducer, initialState);
      return (
        <div>
          <div>Count - {count}</div>
          <button onClick={() => dispatch("increment")}>Increment</button>
          <button onClick={() => dispatch("decrement")}>Decrement</button>
          <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
      );
    }

    export default CounterOne;
