import React from "react";

import { Navbar, Container, Brand, Nav,Image ,Form,Card,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 import { Link } from "react-router-dom"
 export default function Pag3(){
     return(
         <div>
<Card style={{textAlign:"center",marginLeft:"10%",width:"80%",height:"600%"}}>
  <Card.Body>
  <h1> Blood Bag Trip</h1>
  <img  style={{height:"400px"}}
      className="d-block w-100"
      src="https://i.pinimg.com/564x/c2/c5/8e/c2c58e4f217b7daa48f50c36d76bd695.jpg"
      alt="First slide"
    />

  </Card.Body>
</Card>
<Form style={{marginLeft:"10%",width:"500%",height:"600%"}}>
<div>

<h4 style={{color: "gray"}}>Prepared by Laboratory Specialist: Rawan Al-Hazmi
The article centers around the main questions: </h4>
        <ul className="list-unstyled">
          <li >What are the components of blood?</li>
          <li > How to separate components of the blood bag?</li>
          <li >To whom are blood components transported?</li>
          <li >What are the necessary tests that are conducted for the blood bag before transferring it to the patient to ensure its health?</li>
          <h4 style={{color: "gray"}}>Blood components are divided into several main components, namely:</h4>
          <li >Red Blood cells</li>
          <li >White Blood cells</li>
          <li > Platelets</li>
          <li>Plasma</li>
          <h4 style={{color: "gray"}}>How is blood drawn from a donor?</h4>
          <p>Blood is drawn from the donor, and placed in a primary bag, the air sac on the anticoagulant that appears to protect the blood from clotting and keep it going for longer.</p>
          <h4 style={{color: "gray"}}>What is the method for separating components?</h4>
          <p>First the blood bag is placed in a centrifuge, and then the process of separation of components is divided into two main stages:
The first: the stage of slow circulation, in which blood cells are separated from the plasma and platelets so that the plasma and platelets are in the upper layer and blood cells in the lower layer.
The second: rapid rotation. At this stage, the plasma is separated from the plates, so that the plasma is at the top and the plates are at the bottom.
White blood cells are completely eliminated through specialized filters, because they excite the immune system and give an undesirable reaction.</p>
          <h4 style={{color: "gray"}}>What is the temperature at which blood components are stored?</h4>
        </ul>
</div>
</Form>

         </div>
     )
 }