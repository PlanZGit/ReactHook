# useState Hook

### video notes - 2,3

1. React Shortcuts

   - rce - create a class component
   - rconst - create a state var
   - rfce - create a functional component

2. Syntax

   - Array destructuring a feature in ES6
   - const [count, setCount] = useState(0)

3. Rules of Hook
   - "Only Call Hooks at the Top Level"
   - Don't call Hooks inside loops, conditions, or nested functions
   - "Only Call Hooks from React Functions"
   - Call them from within React functional components and
     not just any regular JavaScript function

### 1. HookCounter vs ClassCounter

_HookCounter.js_

        import React, { useState } from "react";
        function HookCounter() {
          const [count, setCount] = useState(0);
          return (
            <div>
              <button onClick={() => setCount(count + 1)}>Count {count}</button>
            </div>
          );
        }
        export default HookCounter;

_ClassCounter.js_

        import React, { Component } from "react";
        class ClassCounter extends Component {
          constructor(props) {
            super(props);
            this.state = {
              count: 0,
            };
          }
          incrementCount = () => {
            this.setState({ count: this.state.count + 1 });
          };
          render() {
            return (
              <div>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
              </div>
            );
          }
        }
        export default ClassCounter;

### 2. useState with previoues state

_HookCounterTwo.js_

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
