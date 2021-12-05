import React from "react";

import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./main.css";
import { useState } from "react";

export default function Success() {
  const [hospital, setHospital] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const saveAppoitment = (event) => {
    console.log("Save Button Click");
    const obj = {
      hospital: hospital,
      date: date,
      userId: sessionStorage.getItem("userId"),
    };

    const data = JSON.parse(localStorage.getItem("Appoitment"));

    if (data !== null) {
      data.push(obj);
      localStorage.setItem("Appoitment", JSON.stringify(data));
    } else {
      let newAppoitment = [];
      newAppoitment.push(obj);
      localStorage.setItem("Appoitment", JSON.stringify(newAppoitment));
    }
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="Success">
      <div className="Success1">
        <Container>
          <Row>
            <Col></Col>
            <Col
              style={{
                left: "79px",
                top: "25px",
                position: "relative",
              }}
            >
              {" "}
              <Form
                style={{
                  textAlign: "center",
                  padding: "50px",
                  marginBottom: "10px",
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name of Hospital</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter hospital"
                    onChange={(e) => setHospital(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Reservation date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
              </Form>
              <Button
                onClick={saveAppoitment}
                variant="secondary"
                type="button"
              >
                {" "}
                Done
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
