# useReducer

- useReducer is a hook that is used for state management
- useReducer is related to reducer functions
- useReducer(reducer, initialState)
- reducer(currentState, action)
- useReducer is basicly changing the state of React components

## Intro

Whats the difference?

- useState is built using useReducer

## reduce in JavaScript & useReduce in React

    array.reduce(reducer,initialValue) //JS
    useReducer(reducer,initialValue) //React

    singleValue = reducer(accumulator, itemValue) //JS
    newState = reducer(currentState, action) //React

    // reduce method returns a single value
    // useReducer returns a pair of values [newState, dispatch]

## useReducer simple state & action

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

## useReducer complex state & action

_CounterTwo.js_

scenario 1 - Action as a object

- pass additional data, we want to count by 5 instead of 1,

        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment 5
        </button>

scenario 2 - State as a object

- keep track of two counter, we want two counter

      const initialState = {
        firstCounter: 0,
        secondCounter: 10,
      };

      const reducer = (state, action) => {
        switch (action.type) {
          case "increment":
            return { ...state, firstCounter: state.firstCounter + action.value };
          case "decrement":
            return { ...state, firstCounter: state.firstCounter - action.value };
          case "increment2":
            return { ...state, secondCounter: state.secondCounter + action.value };
          case "decrement2":
            return { ...state, secondCounter: state.secondCounter - action.value };
          case "reset":
            return initialState;
          default:
            return state;
        }
      };

## other notes

Array.prototype.reduce()

    const array1 = [1, 2, 3, 4];
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue, initialValue);

    console.log(sumWithInitial);
    // Expected output: 10
