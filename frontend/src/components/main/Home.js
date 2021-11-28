import React from "react";
import {Carousel,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 import { Link, useNavigate } from "react-router-dom"
export default function Home() {
  const navigate = useNavigate()
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
 
    {/* <Button variant="outline-light" size="lg">
    blood bag trip
  </Button> */}
  <Link to = "/pag1" style={{color:"black",textDecorationLine:"none"}} variant=""size="lg"> <h1> Blood Bag Trip</h1> </Link>
      {/* <h3>blood bag trip</h3> */}
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
     
  <Link to="/pag2" style={{color:"black",textDecorationLine:"none"}} variant=""size="lg" ><h1>Blood Type Do You Give?</h1> </Link>
      {/* <h3>blood type do you give?</h3> */}

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
      
  <Link to ="/pag3" style={{color:"black",textDecorationLine:"none"}} variant=""size="lg" ><h1>First Blood Donor</h1></Link >
      {/* <h3>first blood donor</h3> */}

      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<p>
        {' '}
      {' '}
      </p>
  <Button  style={{backgroundColor: "#BD1616", textAlign:"center",marginLeft:"35%",width:"450px",height:"150px"}} onClick={()=>{
    navigate("/Questions")
  }}><h1>Appointment Booking</h1></Button>

</div>
    )
}