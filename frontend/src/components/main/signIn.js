import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rong, setRong] = useState(false);

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
        if (res.data !== "User not found") {
          navigate("/");
          sessionStorage.setItem("userId", res.data.id);
          sessionStorage.setItem("email", res.data.email);
          props.setUserName(res.data.firstName);
          console.log(res.data.email);
        } else {
          const findUser = JSON.parse(localStorage.getItem("users"));
          if (
            findUser !== null &&
            findUser.email === email &&
            findUser.password === password
          ) {
            console.log(findUser);

            props.setUserName(findUser.firstName);

            navigate("/");
            console.log(res.data.email);
          } else {
            setRong(true);
            return;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="signIn">
      <Card className="cardSignIn">
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
            <br></br>
            <Button className="ButtoSignIn" block size="lg" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {rong && (
        <center>
          <span className="spanSignIn">
            The Email or Password is Incorrect{" "}
          </span>
        </center>
      )}
    </div>
  );
}
