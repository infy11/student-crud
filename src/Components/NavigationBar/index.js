import React from 'react';
import {Navbar,Nav}  from "react-bootstrap";
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }

  getNavbar = () =>{
   return(
     <>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav >
    <div className="nav-item"><Link className="nav-link" to="/login">Login</Link></div>
    <div className="nav-item"><Link className="nav-link" to="/register">Register</Link></div>
      {/* <Nav.Link href="#Login">Login</Nav.Link>
      <Nav.Link href="#Register">Register</Nav.Link> */}
    </Nav>
   
  </Navbar>
     </>
   )
  }


  render(){
    return(
      <>
      {this.getNavbar()}
      </>
    )
  }
}

export default NavigationBar;