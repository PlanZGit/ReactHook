# Custom Hooks

- A custom Hook is bascally a JavaScipt function whose name start with "use"
- A custom hook can also call other Hooks if required

## Why?

- Share logic - Alternative to HOCs and Render Props
- Reusing logic instead of duplicating

## How to create custom hooks?

### Custom hook - useEffect to change doc title

_useDocumentTitle.js_

    import { useEffect } from "react";

    function useDocumentTitle(count) {
      useEffect(() => {
        document.title = `Count ${count}`;
      }, [count]);
      return <div>useDocumentTitle</div>;
    }

    export default useDocumentTitle;

_DocTitleOne.js_

    import React, { useState } from "react";
    import useDocumentTitle from "./hooks/useDocumentTitle";

    function DocTitleOne() {
      const [count, setCount] = useState(0);

      useDocumentTitle(count);

      return (
        <div>
          DocTitleOne {count}
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            increment
          </button>
        </div>
      );
    }
    export default DocTitleOne;

### Custom hook - array destructuring to change counter

_useCounter.js_

    import { useState } from "react";

    function useCounter(initialCount = 0, value = 1) {
      const [count, setCount] = useState(initialCount);

      const increment = () => {
        setCount((prevCount) => prevCount + value);
      };

      const decrement = () => {
        setCount((prevCount) => prevCount - value);
      };

      const reset = () => {
        setCount(0);
      };
      return [count, increment, decrement, reset];
    }

    export default useCounter;

_CounterHookOne.js_

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

### Custom hook - input

_useInput.js_

    import { useState } from "react";

    function useInput(intialValue) {
      const [value, setValue] = useState(intialValue);

      const reset = () => {
        setValue(intialValue);
      };
      const bind = {
        value,
        onChange: (e) => {
          setValue(e.target.value);
        },
      };

      return [value, bind, reset];
    }

    export default useInput;

_UserForm.js_

    function UserForm() {
      const [firstName, bindFirstName, resetFirstName] = useInput("");
      const [lastName, bindLastName, resetlastName] = useInput("");

      const submitHandler = (e) => {
        e.preventDefault(); //prevent page from refreshing
        console.log(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetlastName();
      };

      return (
        <div>
          UserForm
          <form onSubmit={submitHandler}>
            <div>
              <label>First name</label>
              <input {...bindFirstName} type="text"></input>
            </div>
            <div>
              <label>Last name</label>
              <input {...bindLastName} type="text"></input>
            </div>
            <button>Submit</button>
          </form>
        </div>
      );
    }
