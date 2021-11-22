import React from "react";
import { Navbar, Container, Brand, Nav,Image ,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Wateen</Navbar.Brand>
                <Col  xs={6} md={4}>
      <Image style={{width:"80px",height:"80px"}} src="https://play-lh.googleusercontent.com/hcA5UwVcIVIR3nxiAAl5tXMElHSqeoCJiqtMg8IbHDH5WC2ag5MAs40hUuHcyNC2u08" roundedCircle />
    </Col>
    
  
          <Nav className="me-auto">
            <Nav.Link>
              <Nav.Link to="/">help us</Nav.Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Nav.Link to="/">invitation to donata</Nav.Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Nav.Link to="/">volunteer whith us</Nav.Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/SingUp"></Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/SingIn"></Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
