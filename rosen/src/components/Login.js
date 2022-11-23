import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


function Login(props) {
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
    
    const saveLoginDataHandler = (enteredLoginData) => {
        const loginData = {
            ...enteredLoginData,
            id: Math.random().toString()
        };
        props.onAddLogin(loginData);
    };

  return (
    <>
        <Link style={{margin: '1rem'}}to="/">back</Link>
        <Form style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
        }} onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Login ID:</Form.Label>
            <Form.Control type='text' value={enteredLoginID} onChange={loginIDHandler} placeholder='Enter login id' />
        </Form.Group>
        <Form.Group className='mb-3'  controlId='password'>
            <Form.Label>Password:</Form.Label>
            <Form.Control type='password' value={enteredLoginPW} onChange={loginPWHandler} placeholder='Enter password' />
        </Form.Group>
        <Button  variant='primary' size='' type='submit'>Submit</Button>
        </Form>
    </>
  
  )
}

export default Login