import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";
export default function Questions() {
  const [q2, setQ1] = useState(false);
  const [q3, setQ2] = useState(false);
  const [q4, setQ3] = useState(false);
  const [q5, setQ4] = useState(false);
  const [Q6, setQ05] = useState(true);
  const checkAnswer1 = (answer) => {
    if (answer === "Yes") {
      setQ05(false);
    } else if (answer === "No") {
      setQ1(true);
    }
  };
  const checkAnswer2 = (answer) => {
    if (answer === "Yes") {
      setQ05(false);
    } else if (answer === "No") {
      setQ2(true);
    }
  };
  const checkAnswer3 = (answer) => {
    if (answer === "Yes") {
      setQ05(false);
    } else if (answer === "No") {
      setQ3(true);
    }
  };
  const checkAnswer4 = (answer) => {
    if (answer === "Yes") {
      setQ05(false);
    } else if (answer === "No") {
      setQ4(true);
    }
  };

  const navigate = useNavigate();
  return Q6 ? (
    <div
      style={{
        width: "18rem ",
        marginTop: "30px",
        textAlign: "center",
        marginLeft: "40%",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Q1</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>DO you suffer from a high temperature ?</Card.Text>
          <Button
            as={Col}
            style={{
              width: "18rm",
              className: "mx-2",
              backgroundColor: "gray",
            }}
            onClick={() => {
              checkAnswer1("Yes");
            }}
          >
            YES
          </Button>
          <Button
            as={Col}
            style={{
              backgroundColor: "gray",
              marginLeft: "10px",
              variant: "secondary",
              width: "18rm",
              className: "mx-2",
            }}
            onClick={() => {
              checkAnswer1("No");
            }}
          >
            No
          </Button>{" "}
        </Card.Body>
      </Card>
      {q2 && (
        <Card
          style={{ width: "18rem", marginTop: "30px", textAlign: "center" }}
        >
          <Card.Body>
            <Card.Title>Q2</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>Have you taken aspirin within 48 hours?</Card.Text>
            <Button
              as={Col}
              style={{
                backgroundColor: "gray",
                marginLeft: "10px",
                variant: "secondary",
                width: "18rm",
                className: "mx-2",
              }}
              onClick={() => {
                checkAnswer2("Yes");
              }}
            >
              YES
            </Button>
            <Button
              as={Col}
              style={{
                backgroundColor: "gray",
                marginLeft: "10px",
                variant: "secondary",
                width: "18rm",
                className: "mx-2",
              }}
              onClick={() => {
                checkAnswer2("No");
              }}
            >
              No
            </Button>
          </Card.Body>
        </Card>
      )}
      {""}
      {q3 && (
        <Card
          style={{ width: "18rem ", marginTop: "30px", textAlign: "center" }}
        >
          <Card.Body>
            <Card.Title>Q3</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>Have you donated blood in the past 60 days?</Card.Text>
            <Button
              as={Col}
              style={{
                backgroundColor: "gray",
                marginLeft: "10px",
                variant: "secondary",
                width: "18rm",
                className: "mx-2",
              }}
              onClick={() => {
                checkAnswer3("Yes");
              }}
            >
              YES
            </Button>
            <Button
              as={Col}
              style={{
                backgroundColor: "gray",
                marginLeft: "10px",
                variant: "secondary",
                width: "18rm",
                className: "mx-2",
              }}
              onClick={() => {
                checkAnswer3("No");
              }}
            >
              No
            </Button>
          </Card.Body>
        </Card>
      )}
      {""}

      {q4 && (
        <Card
          style={{ width: "18rem", marginTop: "30px", textAlign: "center" }}
        >
          <Card.Body>
            <Card.Title>Q4</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
              Have you had any surgery within the previous 12 months?
            </Card.Text>
            <Button
              as={Col}
              style={{
                backgroundColor: "gray",
                marginLeft: "10px",
                variant: "secondary",
                width: "18rm",
                className: "mx-2",
              }}
              onClick={() => {
                checkAnswer4("Yes");
              }}
            >
              YES
            </Button>

            <Button
              as={Col}
              style={{
                backgroundColor: "gray",
                marginLeft: "10px",
                variant: "secondary",
                width: "18rm",
                className: "mx-2",
              }}
              onClick={() => {
                checkAnswer4("No");
              }}
            >
              No
            </Button>
          </Card.Body>
        </Card>
      )}
      {q5 && (
        <Button
          style={{ margin: "20px", backgroundColor: "green" }}
          onClick={() => {
            navigate("/Success");
          }}
        >
          Take An Appointment
        </Button>
      )}
    </div>
  ) : (
    <span
      style={{
        display: "block",
        magin: "auto",
        textAlign: "center",
        fontSize: "large",
        fontStyle: "bold",
      }}
    >
      You are not eligible to donate blood
    </span>
  );
}
