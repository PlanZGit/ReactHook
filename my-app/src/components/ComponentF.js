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
