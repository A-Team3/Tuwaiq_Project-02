import React from "react";

import {Card,Button, Form, Row, Col, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 import { Link } from "react-router-dom"
import "./main.css";
import { useState } from "react";

 export default function Success(){
    const [hospital, setHospital]= useState("");
    const [date, setDate]= useState("");

    // function saveAppoitment(){
        const obj={hospital:hospital, date: date}
      localStorage.setItem("Appoitment",JSON.stringify(obj) )
        
      

    // }

    // console.log(save);
     return(
      // backgroundImage: `url("https://i.pinimg.com/564x/81/45/01/814501f62677f65ae78d9288be124c0b.jpg")`
        <div style={{textAlign:"center",padding:"50px",
           width:"100%",height:"100vh", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
             <Container>
 
  <Row>
    <Col></Col>
    <Col>   <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name of Hospital</Form.Label>
    <Form.Control type="text" placeholder="Enter hospital" onChange={(e)=>setHospital(e.target.value) }/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Reservation date</Form.Label>
    <Form.Control type="date" placeholder="Enter date"  onChange={(e)=>setDate(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   
  </Form.Group>
  <Button href="/" variant="primary" type="button">
    Submit
  </Button>
</Form></Col>
    <Col></Col>
  </Row>
</Container>
          {/* <h1 id="background-text"> Congratulations, you are qualified!</h1> */}
       
            
        </div>
     )
 }