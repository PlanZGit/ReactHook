# useContext

- Context provides a way to pass data through the component tree without habing to pass props down manually at every level
- useContext difference is the consumption of context value

## Create and provide value

_App.js_

    // passing two value, create two context
    export const UserContext = React.createContext();
    export const ChannelContext = React.createContext();

      <UserContext.Provider value={"Vishwas"}> //pass vaule
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

    // Nested Components
    // ComponentC.js > ComponentE.js > ComponentF.js

## Context

_ComponentF.js_

    import React from "react";
    import { UserContext, ChannelContext } from "../App";
    function ComponentF() {
      return (
        <div>
          <UserContext.Consumer>
            {(user) => {
              return (
                <ChannelContext.Consumer>
                  {(channel) => {
                    return (
                      <>
                        Context {user} - {channel}
                        {/* <div>User context value {user} </div>
                        <div>Channel {channel}</div> */}
                      </>
                    );
                  }}
                </ChannelContext.Consumer>
              );
            }}
          </UserContext.Consumer>
        </div>
      );
    }
    export default ComponentF;

## useContext

_ComponentE.js_

    import React, { useContext } from "react";
    import ComponentF from "./ComponentF";
    import { UserContext, ChannelContext } from "../App";

    function ComponentE() {
      const user = useContext(UserContext);
      const channel = useContext(ChannelContext);

      return (
        <div>
          useContext {user} - {channel}
          <ComponentF />
        </div>
      );
    }

    export default ComponentE;
