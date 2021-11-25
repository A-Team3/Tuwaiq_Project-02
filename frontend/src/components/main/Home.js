import React from "react";
import {Carousel,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 import { Link } from "react-router-dom"
export default function Home() {
    return(
      <div>

        <Carousel style={{marginBottom:"50px",textAlign:"center",marginLeft:"20%",width:"60%",height:"600%"}}>
  <Carousel.Item>
    <img  style={{width:"120px",height:"400px"}}
      className="d-block w-100"
      src="https://i.pinimg.com/564x/c2/c5/8e/c2c58e4f217b7daa48f50c36d76bd695.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
  <Button style={{color:"black"}} variant=""size="lg" ><h1> Blood Bag Trip</h1> </Button>
     
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  style={{width:"120px",height:"400px"}}
      className="d-block w-100"
      src="https://i.pinimg.com/564x/57/07/85/57078555b4723488ecdeaa8fe10ee244.jpg"
      alt=""
    />
    <Carousel.Caption>
  <Button style={{color:"black"}} variant=""size="lg" ><h1>Blood Type Do You Give?</h1> </Button>
     
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:"100px",height:"400px"}}
      className="d-block w-100"
      src="https://i.pinimg.com/564x/13/dc/77/13dc77763efdfcb8ef49408bb3a673b4.jpg"
      alt=""
    />
    <Carousel.Caption>
  <Button style={{color:"black"}} variant=""size="lg" ><h1>First Blood Donor</h1></Button>
      
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      <Button style={{backgroundColor: "rgb(165, 157, 157)", textAlign:"center",marginLeft:"30%",width:"600px",height:"200px"}}><h1>Appointment Booking</h1></Button>
</div>
    )
}