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

### 3. useState with object

The setter function provided by the useState Hook does not automatically merge and update objects <br> you have to manually merge it yourself then pass the value to the setter function

_HookCounterThree.js_

    import React, { useState } from "react";
    function HookCounterThree() {
      const [name, setName] = useState({ firstName: "", lastName: "" });
      return (
        <form>
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          ></input>
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          ></input>
          <h2>Your first name is - {name.firstName}</h2>
          <h2>Your last name is - {name.lastName}</h2>
          <h2>{JSON.stringify(name)}</h2>
        </form>
      );
    }
    export default HookCounterThree;

### 4. useState with array

use spread operator
created a list using the length of the object as the key value

_HookCounterFour.js_

    import React, { useState } from "react";
    function HookCounterFour() {
      const [items, setItems] = useState([]);
      const addItem = () => {
        setItems([
          ...items,
          { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
        ]);
      };
      return (
        <div>
          <button onClick={addItem}>Add a number</button>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </div>
      );
    }
    export default HookCounterFour;
