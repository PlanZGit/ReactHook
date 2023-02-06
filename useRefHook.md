# useRef

## First common use cases

- focus on input text

_FocusInput.js_

      import React, { useEffect, useRef } from "react";

      function FocusInput() {
        const inputRef = useRef(null);

        useEffect(() => {
          //foucus the input elememt
          inputRef.current.focus();
        }, []);

        return (
          <div>
            FocusInput
            <input type="text" ref={inputRef} />
          </div>
        );
      }
      export default FocusInput;

## Second use cases

- use to create a generic container which can hold a mutable value similar to instance properties on a class component. This generic container does not cause rerender when the data it stores changes

- a simple use case is clearing a interval timer from an event handler

_HookTimer.js_

    import React, { useState, useEffect, useRef } from "react";
    function HookTimer() {
      const [timer, setTimer] = useState(0);
      const intervalRef = useRef();

      useEffect(() => {
        intervalRef.current = setInterval(() => {
          setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
        return () => {
          clearInterval(intervalRef.current);
        };
      }, []);

      return (
        <div>
          HookTimer : {timer}
          <button
            onClick={() => {
              clearInterval(intervalRef.current);
            }}
          >
            Clear
          </button>
        </div>
      );
    }

    export default HookTimer;
