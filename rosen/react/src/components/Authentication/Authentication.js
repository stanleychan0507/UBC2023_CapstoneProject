import React, { useState } from "react";

const Authentication = (props) => {
  const [enteredLoginID, setLoginID] = useState(""); //create use State for loginID
  const [enteredLoginPW, setLoginPW] = useState(""); //create use State for loginPW

  const loginIDHandler = (event) => { //handler for loginID, which holds the ID itself
    setLoginID(event.target.value);
  }
  
  const loginPWHandler = (event) => { //handler for loginPW, which holds the PW itself
    setLoginPW(event.target.value);
  }

  const submitHandler = (event) => { //handler for the submit button
    event.preventDefault();

    const loginData = {
      loginID: enteredLoginID,
      loginPW: enteredLoginPW,
    };

    props.onSaveLoginData(loginData);
    setLoginID("");
    setLoginPW("");
  };

  return ( // React html for the login
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
