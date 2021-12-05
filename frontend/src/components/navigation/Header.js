import React, { useState } from "react";
import {
  Navbar,
  Container,
  Brand,
  Nav,
  Image,
  Col,
  Row,
  InputGroup,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@restart/ui/esm/Button";

export default function Header(props) {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("Appoitment"));

  console.log("User Name in Header: ", props.userName);

  let [query, setQuery] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();

    navigate("/people", { state: { bloodGroup: query } });
  }
  return (
    <>
      <Navbar className="NavbarHeader">
        <Container>
          <Navbar.Brand className="NavbarHeader1">Wateen</Navbar.Brand>
          <h5></h5>
          <Row>
            <Col xs={6} md={4}>
              <Image
                className="ImageHeader"
                src="https://play-lh.googleusercontent.com/hcA5UwVcIVIR3nxiAAl5tXMElHSqeoCJiqtMg8IbHDH5WC2ag5MAs40hUuHcyNC2u08"
                roundedCircle
              />
            </Col>
            <Col></Col>
          </Row>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link className="LinkHeader" to="/">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link className="LinkHeader" to="/SignIn">
                SignIn
              </Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link className="LinkHeader" to="/SignUp">
                SignUp
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="LinkHeader" to="/Footer">
                Help
              </Link>
            </Nav.Link>

            <Nav.Link></Nav.Link>
            <Nav.Link> </Nav.Link>

            <Nav.Link>
              <Link
                style={{ textDecorationLine: "none", color: "whitesmoke" }}
                to="/Finle"
              >
                Appointments
              </Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              placeholder="Blood types"
              aria-label="Blood types"
              className="me-2"
              aria-describedby="basic-addon2"
              onChange={handleChange}
            />
            <Button variant="outline-success" onClick={handleClick}>
              Search
            </Button>
          </Form>
          &nbsp;
          <span>&nbsp;&nbsp;</span>
          <p className="pHeader">Hello: {props.userName}</p>
        </Container>
      </Navbar>
    </>
  );
}
