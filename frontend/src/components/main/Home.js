import React from "react";
import { Navbar, Container, Brand, Nav,Image ,Col,Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 import { Link } from "react-router-dom"
export default function Home() {
    return(


        <Carousel style={{textAlign:"center",marginLeft:"30%",width:"600px",height:"600%"}}>
  <Carousel.Item>
    <img  style={{width:"120px",height:"400px"}}
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObxuGd6oGJSuCYbCJggQTP1He6brHQgumlw&usqp=CAU"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>blood bag trip</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  style={{width:"120px",height:"400px"}}
      className="d-block w-100"
      src="https://www.alwatan.com.sa/uploads/images/2019/06/08/326931.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h3>blood type do you give?</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:"100px",height:"400px"}}
      className="d-block w-100"

      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XufsjhFK8rkts1UZaAOjWN8hi_2CzJul2AlUCX0RBjr60iiDHZ7WiguKlo0ei0-_bXk&usqp=CAU"
      alt=""
    />

    <Carousel.Caption>
      <h3>first blood donor</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

