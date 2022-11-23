import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import RG from "../images/RosenLogo.webp";
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

        //props.onSaveLoginData(loginData);
        setLoginID("");
        setLoginPW("");
    };



  return (
    <>
        
        <Form style={{ 
        backgroundColor:"#56708a",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
        }} onSubmit={submitHandler}>
        <img src={RG}  style={{margin: '2rem'}} className="logo" alt="Rosen Group logo" />
        
        <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Login ID:</Form.Label>
            <Form.Control type='text' value={enteredLoginID} onChange={loginIDHandler} placeholder='Enter login id' />
        </Form.Group>
        <Form.Group className='mb-3'  controlId='password'>
            <Form.Label>Password:</Form.Label>
            <Form.Control type='password' value={enteredLoginPW} onChange={loginPWHandler} placeholder='Enter password' />
        </Form.Group>
        <div>
        <Button  variant='primary'  type='submit'>Submit</Button>
        <Button  variant='primary' style={{margin:'1rem'}} type='submit'><Link style={{color: 'white', textDecoration: 'none'}}to="/">back</Link></Button>
        
        
        </div>
        
        </Form>
    </>
  
  )
}

export default Login