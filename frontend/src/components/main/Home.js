import React, { useState, useEffect } from "react";
import { Carousel, Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("Appoitment"));

  return (
    <div>
      <Carousel className="CarouselHome">
        <Carousel.Item>
          <img
            className="imgHome"
            src="https://i.pinimg.com/564x/c2/c5/8e/c2c58e4f217b7daa48f50c36d76bd695.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Link className="LinkHome" to="/pag1" variant="" size="lg">
              {" "}
              <h1> Blood Bag Trip</h1>{" "}
            </Link>

            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgHome"
            src="https://i.pinimg.com/564x/57/07/85/57078555b4723488ecdeaa8fe10ee244.jpg"
            alt=""
          />
          <Carousel.Caption>
            <Link className="LinkHome" to="/pag2" variant="" size="lg">
              <h1>Blood Type Do You Give?</h1>{" "}
            </Link>

            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgHome"
            src="https://i.pinimg.com/564x/13/dc/77/13dc77763efdfcb8ef49408bb3a673b4.jpg"
            alt=""
          />
          <Carousel.Caption>
            <Link className="LinkHome" to="/pag3" variant="" size="lg">
              <h1>First Blood Donor</h1>
            </Link>

            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Button
        className="ButtonHome"
        onClick={() => {
          navigate("/Questions");
        }}
      >
        <h1>Appointment Booking</h1>
      </Button>
    </div>
  );
}
