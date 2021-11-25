import React from "react";

import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 import { Link } from "react-router-dom"
 export default function Pag2(){
     return(
         <div>
<Card style={{marginBottom:"50px",marginLeft:"20%",width:"60%",height:"600%"}}>
  <Card.Body>
  <h1 style={{textAlign:"center",marginBottom:"50px",marginLeft:"20%",width:"60%",height:"600%"}}>Blood Type Do You Give?</h1>
  <img  style={{height:"400px"}}
      className="d-block w-100"
      src="https://i.pinimg.com/564x/c2/c5/8e/c2c58e4f217b7daa48f50c36d76bd695.jpg"
      alt="First slide"
    />
    <h4 style={{color: "gray"}}>We start with the A + group: </h4>
<p>See, it is the seventh in terms of rarity, and the owners of this type can donate blood for A + and + AB, and they can support platelets for A + and + O </p>
<h4 style={{color: "gray"}}>Followed by the B + group:</h4>
<p> which is considered the sixth type in terms of rarity, and holders of this type can donate blood for B + and AB +, and they can donate platelets for B + and O +</p>
<h4 style={{color: "gray"}}>Faction +AB:</h4>
<p>The owners of this type can donate blood for themselves only, but they can receive blood from all types</p>
<h4 style={{color: "gray"}}>We move on to the last positive type,which is the O + type:</h4>
<p>  and it is considered the most important group because the owners of this blood group can donate to all the O +, AB +, B + and A + positive groups.</p>
<h4 style={{color: "gray"}}>The first negative type is -A:</h4>
<p> Its owners can donate blood for -A, A +, -AB and AB +, and it is the fourth type in terms of rarity!</p>
<h4 style={{color: "gray"}}>The -B type:</h4>
<p> which is considered the second rarest type, They can donate to the owners of the following types -B, B+, -AB, and AB+</p>
<h4 style={{color: "gray"}}>People with type AB:</h4>
<p> which is the most rare blood group! People with this type can donate blood only for themselves and for AB+</p>
<h4 style={{color: "gray"}}>Finally -O</h4>
<p>Holders of this type can donate to all negative and positive blood types, but the owners of this type cannot receive blood except from themselves only!
That is why it is called the "Great Family".
It is considered the fifth species in terms of rarity!</p>
  </Card.Body>
</Card>


         </div>
     )
 }