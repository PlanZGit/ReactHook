import React, { useState } from "react";
import useInput from "./hooks/useInput";

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

export default UserForm;
