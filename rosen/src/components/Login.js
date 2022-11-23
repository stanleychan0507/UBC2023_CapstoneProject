import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Authentication from "./Authentication/Authentication";

function Login(props) {
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
        }}>
        <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Login ID:</Form.Label>
            <Form.Control type='text' placeholder='Enter login id' />
        </Form.Group>
        <Form.Group className='mb-3'  controlId='password'>
            <Form.Label>Password:</Form.Label>
            <Form.Control type='password' placeholder='Enter password' />
        </Form.Group>
        <Button  variant='primary' size='' type='submit'>Submit</Button>
        
        </Form>
    </>
  
  )
}

export default Login