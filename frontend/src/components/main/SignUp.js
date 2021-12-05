import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./main.css";
function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [age18, setAge18] = useState(false);

  function handleSubmit() {
    const data = {
      id: 100,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      age: age,
      city: city,
      bloodGroup: bloodGroup,
      phoneNumber: phoneNumber,
    };
    axios
      .post("http://localhost:5000/users", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("users", JSON.stringify(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const navigate = useNavigate();
  return (
    <div className="SignUp">
      <Card className="cardSignUp">
        <Card.Body>
          <h1>You Need SignUp</h1>

          <Form
            dir-align="center"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumberPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter Phone Number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPlatoon">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                type="bloodGroup"
                name="bloodGroup"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                placeholder="Enter Blood Group"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPlatoon">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="Password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>

            <Button
              className="ButtonSignUp"
              onClick={() => {
                if (age >= 18) {
                  navigate("/SignIn");
                } else {
                  setAge18(true);
                  return;
                }
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {age18 && (
        <center>
          <span className="spanSignUp">You Must Be an Adult</span>
        </center>
      )}
    </div>
  );
}
export default SignUp;
