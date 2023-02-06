// import React, { useReducer } from "react";
import "./App.css";
import ClassTimer from "./components/ClassTimer";
import FocusInput from "./components/FocusInput";
import HookTimer from "./components/HookTimer";
// import Counter from "./components/Counter";
// import DataFetchingOne from "./components/DataFetchingOne";
// import DataFetchingTwo from "./components/DataFetchingTwo";
// import HookComponentA from "./components/HookComponentA";
// import HookComponentB from "./components/HookComponentB";
// import HookComponentC from "./components/HookComponentC";
// import CounterThree from "./components/CounterThree";
// import ComponentC from "./components/ComponentC";
// import CounterOne from "./components/CounterOne";
// import CounterTwo from "./components/CounterTwo";
// import DataFetching from "./components/DataFetching";
// import MouseContainer from "./components/MouseContainer";
// import ClassCounterOne from "./components/ClassCounterOne";
// import ClassMouse from "./components/ClassMouse";
// import HookCounterOne from "./components/HookCounterOne";
// import HookMouse from "./components/HookMouse";
// import HookCounterFour from "./components/HookCounterFour";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterTwo from "./components/HookCounterTwo";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";\
// import IntervalClassCounter from "./components/IntervalClassCounter";
// import IntervalHookCounter from "./components/IntervalHookCounter";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// export const CountContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <HookCounterOne></HookCounterOne> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>
          Count: {count}
          <HookComponentA />
          <HookComponentB />
          <HookComponentC />
        </div>
      </CountContext.Provider> */}

      {/* <DataFetchingOne />
      <DataFetchingTwo /> */}

      {/* <Counter /> */}
      <FocusInput />
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
