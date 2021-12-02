import React from "react";

import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 import { Link } from "react-router-dom"
import Header from "../navigation/Header";
 export default function Pag1(){
     return(
       <>
      
         <div>
<Card style={{marginBottom:"50px",marginLeft:"20%",width:"60%",height:"600%"}}>
  <Card.Body>
  <h1> Blood Bag Trip</h1>
  <img  style={{height:"400px"}}
      className="d-block w-100"
      src="https://i.pinimg.com/564x/c2/c5/8e/c2c58e4f217b7daa48f50c36d76bd695.jpg"
      alt="First slide"
    />
    <h4 style={{color: "gray"}}><h2>Prepared by Laboratory Specialist: Rawan Al-Hazmi
The article centers around the main questions:</h2> </h4>
        <ul className="list-unstyled">
          <li ><h2>What are the components of blood?</h2></li>
          <li ><h2> How to separate components of the blood bag?</h2></li>
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
          <li >red blood levels "1 to 6 degrees Celsius"</li>
          <li >Plasma "-18" degrees Celsius</li>
          <li >Platelets "20 to 24 degrees Celsius"</li>
          <h4 style={{color: "gray"}}>To whom are blood components transported?</h4>
          <li >Red blood cells: patients with anemia of all kinds "especially thalassemia, sickle cell anemia"</li>
          <li >Plasma: Patients with deficiency of natural clotting factors in the body and severe bleeding in addition to those with burns due to the loss of a large amount of fluid from the body.</li>
          <li >One of the most important sub-components of plasma is cryoprecipitate and is extracted by cryopreservation technique.
Then finally thawing is re-freezing again.
The component is transferred to patients with a deficiency of fibrinogen or von
Willbrand/ factor 8 This ingredient is highly concentrated in clotting factors.</li>
          <li>Platelets: They are transferred to patients with leukemia and patients who suffer from a deficiency in the number of platelets or a defect in their function.
The name of the plates varies according to the method of extracting them, and they are divided into two main parts:
- To be separated from the rest of the components from the initial bag and in this case they are called Random Donor Platelets "RDP"</li>
           <li >That the donor donates directly through the Apharesis device and in this case it is more useful because one unit of it is equal to 6 units of RDP.</li>
           <h4 style={{color: "gray"}}>What are the tests conducted for the blood bag to ensure the suitability of transfusion to the patient?</h4> 
           <p>Blood samples are drawn and sent to the laboratory for the following tests:</p>
           <li >blood type determination ABO . </li>
          <li >Compatibility test between the patient's blood and the donor's blood</li>
          <li > Ensure that the donor's blood is free of diseases, including:</li>
          <li>human immunodeficiency virus "HIV"</li>
          <li >Hepatitis B virus "HBV"</li>
          <li >Hepatitis C virus "HCV"</li>
          <li >Syphilis</li>
          <li>malaria.</li>
          <p>With this, and God willing, we guarantee the safe delivery of blood to the patient’s body, and congratulations to every donor for the great reward.</p>
        </ul>
  </Card.Body>
</Card>


         </div>
         </>
     )
 }