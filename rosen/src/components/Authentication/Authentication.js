import React, { useState } from "react";

const Authentication = (props) => {
  const [enteredLoginID, setLoginID] = useState("");
  const [enteredLoginPW, setLoginPW] = useState("");

  const loginIDHandler = (event) => {
    setLoginID(event.target.value);
  }
  
  const loginPWHandler = (event) => {
    setLoginPW(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const loginData = {
      loginID: enteredLoginID,
      loginPW: enteredLoginPW,
    };

    props.onSaveLoginData(loginData);
    setLoginID("");
    setLoginPW("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Login ID</label>
        <input type="text" value={enteredLoginID} onChange={loginIDHandler}></input>
      </div>
      <div>
        <label>Login Password</label>
        <input type="text" value={enteredLoginPW} onChange={loginPWHandler}></input>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Authentication;
