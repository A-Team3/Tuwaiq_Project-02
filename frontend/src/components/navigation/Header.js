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
      <Navbar style={{ backgroundColor: "black", marginBottom: "50px" }}>
        <Container>
          <Navbar.Brand style={{ color: "whitesmoke" }}>Wateen</Navbar.Brand>
          <h5></h5>
          <Row>
            <Col xs={6} md={4}>
              <Image
                style={{ width: "80px", height: "80px" }}
                src="https://play-lh.googleusercontent.com/hcA5UwVcIVIR3nxiAAl5tXMElHSqeoCJiqtMg8IbHDH5WC2ag5MAs40hUuHcyNC2u08"
                roundedCircle
              />
            </Col>
            <Col></Col>
          </Row>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link
                style={{ textDecorationLine: "none", color: "whitesmoke" }}
                to="/"
              >
                Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link
                style={{ textDecorationLine: "none", color: "whitesmoke" }}
                to="/SignIn"
              >
                SignIn
              </Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link
                style={{ textDecorationLine: "none", color: "whitesmoke" }}
                to="/SignUp"
              >
                SignUp
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecorationLine: "none", color: "whitesmoke" }}
                to="/Footer"
              >
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
          <p
            className="d-flex me-2"
            style={{ textAlign: "right", color: "white", marginTop: "8px" }}
          >
            Hello: {props.userName}
          </p>
        </Container>
      </Navbar>
    </>
  );
}
