import React from 'react';
import {Form,Button, Card}  from "react-bootstrap";

class Login extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }

  getLogin= () =>{
   return(
     <>
     <div className="center">
     <Card className="mt-5" style={{ width: '30rem' }}>
       <Card.Header>Login</Card.Header>
      <Card.Body>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Card.Body>
    </Card>
    </div>
     </>
   )
  }


  render(){
    return(
      <>
      {this.getLogin()}
      </>
    )
  }
}

export default Login;