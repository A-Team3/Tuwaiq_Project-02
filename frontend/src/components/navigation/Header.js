import React from "react";
import { Navbar, Container, Brand, Nav,Image ,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Navbar style={{backgroundColor:"black", marginBottom: "50px"}}>
        <Container> 

          <Navbar.Brand style={{color:"whitesmoke"}}>Wateen</Navbar.Brand>
                <Col  xs={6} md={4}>
      <Image style={{width:"80px",height:"80px"}} src="https://play-lh.googleusercontent.com/hcA5UwVcIVIR3nxiAAl5tXMElHSqeoCJiqtMg8IbHDH5WC2ag5MAs40hUuHcyNC2u08" roundedCircle />
    </Col>
    


          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{textDecorationLine:"none",color:"whitesmoke"}} to="/">Help</Link>
            </Nav.Link>
            <Nav.Link>
            {" "}

              <Link style={{textDecorationLine:"none",color:"whitesmoke"}} to="/">Home</Link>
            </Nav.Link>
  
            <Nav.Link>
              <Link style={{textDecorationLine:"none",color:"whitesmoke"}} to="/">invitation to donata</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link style={{textDecorationLine:"none",color:"whitesmoke"}} to="/">volunteer whith us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{textDecorationLine:"none",color:"whitesmoke"}} to="/SignUp">SignUp</Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{textDecorationLine:"none",color:"whitesmoke"}} to="/SignIn">SignIn</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
