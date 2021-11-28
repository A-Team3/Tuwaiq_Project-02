
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
     <div>

   <h1>SignIn</h1>
  <div> 
  <input type="text" placeholder="user name" className="name1" />
  <img style={{width:"20px",height:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvBT4W7EoXYk-xWQvsgoMQQ87xddefgYTCIvZz7vwPCSR9gzD2gbow_OnEeTEwRaCdBc&usqp=CAU" alt="email"></img>
  

  </div>
  <div>
   
  <input type="text" placeholder="password"  className="name2"/>
  <img style={{width:"20px",height:"20px",marginBottom:"100px"}} src="https://www.freeiconspng.com/uploads/lock-icon-png-14.png" alt="password"/>
   
  
  
     </div>
     <button style={{width:"80px",height:"50px",marginTop:100,backgroundColor:"gray"}}>SignIn</button>
     </div>
    </div>

    
    
   </div>
   
     </div>   
  );
}
