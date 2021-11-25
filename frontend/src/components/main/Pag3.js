import React from "react";

import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 import { Link } from "react-router-dom"
 export default function Pag3(){
     return(
         <div>
<Card style={{marginBottom:"50px",textAlign:"center",marginLeft:"20%",width:"60%",height:"600%"}}>
  <Card.Body>
  <h1>First Blood Donor</h1>
  <img  style={{marginBottom:"50px",height:"400px"}}
      className="d-block w-100"
      src="https://i.pinimg.com/564x/c2/c5/8e/c2c58e4f217b7daa48f50c36d76bd695.jpg"
      alt="First slide"
    />
    <ul className="list-unstyled">
          <li >In 1492, Christian priest Innocent VIII suffered a stroke, his body became weak and he fell into a coma.
              <br/>
               His doctor suggested a blood transfusion for him in order to treat him, but he used primitive methods, 
               <br/>
               so the operation failed and Innocent died</li>
          <li >In 1615, a doctor named Andreas discovered a new technique for transfusion of blood and shared it with his colleagues,
          <br/>
               but unfortunately it was not published enough.</li>
          <li >In 1616, the English physician "William Harvey" discovered that blood flows inside the animal's body, and he continued
          <br/>
               to study the functions of the heart, arteries and veins until 1628.</li>
          <li >In 1628, William demonstrated that the heart works as a pump, and that the pulse is the result of the contraction of
          <br/>
               the heart muscle when blood is pumped into the arteries, and that the same blood returns again through the veins,
               <br/> 
               and thus the blood follows a certain cycle in the body. The first blood transfusion was performed by the Oxford doctor
               <br/> 
               "Richard Lauer", at first he performed the operation on dogs and the operation succeeded and the dogs continued to live.</li>
          <li >In 1667-1818, the French doctor "Jean-Baptiste" was famous for being the first to carry out a human blood transfusion 
          <br/>
              in an artery or vein in France, but it was unsuccessful. The doctor transferred blood from a calf to a human through a silver
              <br/>
               tube! All blood transfusions from animals to humans, in all their forms, have failed. Consequently, it was banned by the Paris
               <br/> 
               Physicians Association in 1678 after causing negative reactions and the death of a large number of individuals. This decision 
               <br/>
               delayed the discoveries and advances related to blood transfusion by about 150 years</li>
          <li >150 years passed before Blundell recorded the first successful attempt to transfuse blood from one person to another, and many
          <br/>
               attempts were made after that, some successful and others unsuccessful, without anyone finding an explanation for it.</li>
          <li > In 1901, "Landsteiner" discovered the four major blood groups "ABO" in Vienna, and here was the explanation for the occurrence
          <br/>
               of mismatch and cracking of blood after the wrong transfusion.</li>
          <li >In 1907, the scientist "Hicton" suggested conducting a compatibility test between the patient's blood and the donor's blood
          <br/>
               before transfusion to the patient to increase the safety of blood transfusion by excluding incompatible blood. Robin Ottenberg,
               <br/>
                who was the first to carry out blood transfusions using group determination, noted that type "O" can be used as a general
                <br/> 
                parameter for all patients of different types. It also appeared after that that a patient with type "AB" can receive blood
                <br/> 
                from any other type,</li>
          <li >1932 The first blood preservation center was established in Leningrad Hospital, followed by the establishment of 
          <br/>
              blood preservation centers in London, Paris and Chicago. The first blood donation center in the Middle East was established
              <br/>
               in 1932 and was based in Alexandria.</li>
          <p>The name "Blood Bank" was adopted on the centers of blood preservation and transfusion by the doctor
          <br/> 
              "Bernard Fantes" and that was in 1937, and the first integrated center attached to the United 
              <br/>
              States Hospital was established at that time.</p>
        </ul>
  </Card.Body>
</Card>
{/* <Form style={{marginLeft:"10%",width:"500%",height:"600%"}}>
<div>
     
</div>
</Form> */}

         </div>
     )
 }