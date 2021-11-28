import React from "react";

import {Card,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 import { Link } from "react-router-dom"
import "./main.css"

 export default function Success(){
     return(

        <div style={{textAlign:"center",padding:"50px",
            backgroundImage: `url("https://i.pinimg.com/564x/81/45/01/814501f62677f65ae78d9288be124c0b.jpg")`,width:"100%",height:"100vh", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
          <h1 id="background-text"> Congratulations, you are qualified!</h1>

            
        </div>
     )
 }