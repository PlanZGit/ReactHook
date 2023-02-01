# useContext

- Context provides a way to pass data through the component tree without habing to pass props down manually at every level

## Context - passing data

_App.js_

      export const UserContext = React.createContext();
      <UserContext.Provider value={"Vishwas"}>
          <ComponentC />
      </UserContext.Provider>

      // Nested Components
      // ComponentC.js > ComponentE.js > ComponentF.js

_ComponentF.js_

    import React from "react";
    import { UserContext, ChannelContext } from "../App";
    function ComponentF() {
      return (
        <div>
          <UserContext.Consumer>
            {(user) => {
              return;
              <div>User context value {user} </div>;
            }}
          </UserContext.Consumer>
        </div>
      );
    }
    export default ComponentF;
