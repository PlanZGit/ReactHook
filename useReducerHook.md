# useReducer

- useReducer is a hook that is used for state management
- useReducer is related to reducer functions
- useReducer(reducer, initialState)
- reducer(currentState, action)
- useReducer is basicly changing the state of React components

Whats the difference?

- useState is built using useReducer

## reduce in JavaScript & useReduce in React

- array.reduce(reducer,initialValue) //JS
- useReducer(reducer,initialValue) //React

- singleValue = reducer(accumulator, itemValue) //JS
- newState = reducer(currentState, action) //React

- reduce method returns a single value
- useReducer returns a pair of values [newState, dispatch]

# Local State managemant

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

## Multiple useReducer

- When dealing with multiple variables that have the same state transition
  it is a good idea to use the same reducer
  -This will avoid the complexity of merging the state if it were an object
- This also prevent us from duplicating code in _CounterTwo.js_

_CounterThree.js_

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

    function CounterThree() {
      const [count, dispatch] = useReducer(reducer, initialState);
      const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

      return (
        <div>
          <div>Count - {count}</div>
          <button onClick={() => dispatch("increment")}>Increment</button>
          <button onClick={() => dispatch("decrement")}>Decrement</button>
          <button onClick={() => dispatch("reset")}>Reset</button>
          <div>
            <div>CountTwo - {countTwo}</div>
            <button onClick={() => dispatchTwo("increment")}>Increment</button>
            <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
            <button onClick={() => dispatchTwo("reset")}>Reset</button>
          </div>
        </div>
      );
    }

    export default CounterThree;

# Global State managemant

## useReducer with useContext

- useReducer - Loacal state management
- Share state between components - Global state management
- useReducer + useContext

      Examples of nested conponents
      App.js > HookComponentA.js
      App.js > HookComponentB.js > D.js
      App.js > HookComponentC.js > E.js > F.js

      // Passing data to A,D,F with useContext

### Step 1:

- Create useReducer

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

      const [count, dispatch] = useReducer(reducer, initialState);

### Step 2:

- Create useContext

      export const CountContext = React.createContext();

      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>
          Count: {count}
          <HookComponentA />
          <HookComponentB />
          <HookComponentC />
        </div>
      </CountContext.Provider>

- Consume useContext

  _HookComponentA.js_

      import React, { useContext } from "react";
      import { CountContext } from "../App";

      function HookComponentA() {
        const countContext = useContext(CountContext);
        return (
          <div>
            HookComponentA
            <button onClick={() => countContext.countDispatch("increment")}>
              Increment
            </button>
            <button onClick={() => countContext.countDispatch("decrement")}>
              Decrement
            </button>
            <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
          </div>
        );
      }

      export default HookComponentA;

# Data Fetching useState

_DataFetchingOne.js_

    import React, { useState, useEffect } from "react";
    import axios from "axios";

    function DataFetchingOne() {
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");
      const [post, setPost] = useState({});

      useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/1")
          .then((response) => {
            setLoading(false);
            setPost(response.data);
            setError("");
          })
          .catch((error) => {
            setLoading(false);
            setPost({});
            setError("Something went wrong!");
          });
      }, []);

      return (
        <div>
          <div> DataFetchingOne</div>
          {loading ? "Loading" : post.title}
          {error ? error : null}
        </div>
      );
    }
    export default DataFetchingOne;

# Data Fetching useReducer

_DataFetchingTwo.js_

    import React, { useReducer, useEffect } from "react";
    import axios from "axios";

    const initialState = {
      loading: true,
      error: "",
      post: {},
    };

    const reducer = (state, action) => {
      switch (action.type) {
        case "FETCH_SUCCESS":
          return {
            loading: false,
            post: action.payload,
            error: "",
          };
        case "FETCH_ERROR":
          return {
            loading: false,
            post: {},
            error: "Something went wrong!",
          };

        default:
          return state;
      }
    };

    function DataFetchingTwo() {
      const [state, dispatch] = useReducer(reducer, initialState);

      useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/1")
          .then((response) => {
            dispatch({ type: "FETCH_SUCCESS", payload: response.data });
          })
          .catch((error) => {
            dispatch({ type: "FETCH_ERROR" });
          });
      }, []);

      return (
        <div>
          <div> DataFetchingTwo</div>
          {state.loading ? "Loading" : state.post.title}
          {state.error ? state.error : null}
        </div>
      );
    }

    export default DataFetchingTwo;

# Other notes

Array.prototype.reduce()

    const array1 = [1, 2, 3, 4];
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue, initialValue);

    console.log(sumWithInitial);
    // Expected output: 10
