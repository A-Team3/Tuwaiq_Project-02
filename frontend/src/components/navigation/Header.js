import React, {useState} from "react";
import { Navbar, Container, Brand, Nav,Image ,Col,InputGroup,FormControl} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@restart/ui/esm/Button";

export default function Header() {
  const navigate = useNavigate();

  let [query, setQuery] = useState('');
  function handleChange(e)
  {
    setQuery(e.target.value);
  }
  function handleClick(e){
    e.preventDefault();
    //console.log('inside click event');
    //console.log(query);
    //useNavigate ShowAll People with this blood type
    navigate('/people', { state: { bloodGroup: query } });    
  }
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
              <Link style={{textDecorationLine:"none",color:"whitesmoke"}} to="/Footer">Help</Link>
            </Nav.Link>
            <Nav.Link>
            {" "}

              <Link style={{textDecorationLine:"none",color:"whitesmoke"}} to="/">Home</Link>
            </Nav.Link>
  
            <Nav.Link>
            
            </Nav.Link>
            <Nav.Link>
              {" "}
              
            </Nav.Link>
            <Nav.Link>
              <Link style={{textDecorationLine:"none",color:"whitesmoke"}} to="/SignUp">SignUp</Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{textDecorationLine:"none",color:"whitesmoke"}} to="/SignIn">SignIn</Link>
           </Nav.Link>
          
           <InputGroup className="mb-3">
    <FormControl
      placeholder="Blood types"
      aria-label="Blood types"
      aria-describedby="basic-addon2"
      onChange={handleChange}
    />
    <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
      search
    </Button>
  </InputGroup>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
