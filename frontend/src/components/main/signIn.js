import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import swal from "sweet-alert";
import axios from "axios";
export default function SignIn() {
  //   const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rong,setRong] = useState(false)

  // const navigation = useNavigate();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data !== "User not found"){
          navigate("/");
        }
        else{setRong(true);
        }
        //swal('Incorrect user name or password');
      })
      .catch((err) => {
        console.log(err);
        //swal('not correct')
      });
  }
  
  return (
    <div
      style={{ textAlign: "center", marginLeft: "35%", width: "200px" }}
      className="signIn"
    >
      <Card
        style={{
          textAlign: "center",
          marginLeft: "20px",
          backgroundColor: "rgb(205, 92, 92)",
          width: "400px",
        }}
      >
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label id="h">Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label id="h">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ backgroundColor: "rgb(68, 53, 53)" }}
              block
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {rong &&
    <center>
     <span
     style={{
       display: "block",
       margin: "auto",
       textAlign: "center",
       fontSize: "large",
       fontStyle: "bold",
       color: "red",
       
     }}
   >
The Email or Password is Incorrect   </span>
   </center>
   }
   
    </div>
  );
}
