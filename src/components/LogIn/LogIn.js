import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            
            <Form className='w-50 mx-auto bg-light p-4 mt-5'>
            <h2 className='text-center text-primary'>Please Log In</h2>
        

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          type="checkbox"
          
           label={<>Remember me</>} />
        </Form.Group>

        <Button variant="primary" type="submit" >
          Register
        </Button>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
            
        </div>
    );
};

export default LogIn;