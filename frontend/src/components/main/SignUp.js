import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form ,Button,Card}from "react-bootstrap";
import { useState } from 'react';
import {  useNavigate } from "react-router-dom"
import axios from 'axios'

//import {Link} from"react-router-dom";
import "./main.css";
 function SignUp(){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age18, setAge18]= useState(false);
  
  

  function handleSubmit(event){
//  console.log(firstName, lastName, age, email, bloodGroup);

//Check if age < 18 then show message that must have age above 18
   event.preventDefault();


  //  axios.get('http://localhost:5000/users')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
axios.post('http://localhost:5000/users', {
  firstName: firstName,
  lastName: lastName,
  email: email,
  age: age,
  city:city,
  bloodGroup:bloodGroup,
  phoneNumber: phoneNumber
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

}
const navigate = useNavigate()
  return( 
     
     <div style={{textAlign:"center",marginLeft:"35%",width:"200px"}}>
      
       <Card style={{textAlign:"center",marginLeft:"20px",backgroundColor: "rgb(205, 92, 92)",width:"400px"}}>
  <Card.Body>
     
     
       <h1>You Need SignUp</h1>
    
     
<Form dir-align="center" onSubmit={e => { handleSubmit(e) }}>

<Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="firstName" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Enter First Name" />
    {/* <input 
          name='firstName' 
          type='text'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        /> */}
    {/* <Form.Control type="phoneNummber" name="phoneNumber" value={phoneNumber} onChange={e => handleChange(e.target.value)} placeholder="Enter Phone Number" /> */}

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="lastName" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Enter Last Name" />
    {/* <input 
          name='firstName' 
          type='text'
          value={firstName}
          
        /> */}

  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Label>Age</Form.Label>
    <Form.Control type="age" name="age" value={age} onChange={e => setAge(e.target.value)} placeholder="Enter Age" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicNumberPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Enter Phone Number" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label>City</Form.Label>
    <Form.Control type="city" name="city" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter City" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPlatoon">
    <Form.Label>Blood Group</Form.Label>
    <Form.Control type="bloodGroup" name="bloodGroup" value={bloodGroup} onChange={e => setBloodGroup(e.target.value)} placeholder="Enter Blood Group" />
  </Form.Group>
  
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button style={{backgroundColor: "rgb(68, 53, 53)"}} onClick={()=>{
    if(age >= 18){
      navigate("/SignIn")
    }else{
      setAge18(true);
    }
  }}>
    Submit
  </Button>
</Form>
</Card.Body>
</Card>
    
     {age18 &&
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
   You Must Be an Adult
   </span>
   </center>
   }
   </div>
   )
 }
 export default SignUp;