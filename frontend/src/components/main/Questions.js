import React, { useState } from "react";
import { Card } from "react-bootstrap";
export default function Questions() {
  const [q2, setQ1] = useState(false);
  const [q3, setQ2] = useState(false);
  const [q4, setQ3] = useState(false);
  const [q5, setQ4] = useState(false);
  

  const checkAnswer1 = (answer) => {
    if (answer === "Yes") {
      alert("You are not eligible to donate blood");
    } else if (answer === "No") {
      setQ1(true);
    }
  };

  const checkAnswer2 = (answer) => {
    if (answer === "Yes") {
      alert("You are not eligible to donate blood");
    } else if (answer === "No") {
      setQ2(true);
    }
  };
  const checkAnswer3 = (answer) => {
    if (answer === "Yes") {
      alert("Go You are not eligible to donate blood Q4");
    } else if (answer === "No") {
      setQ3(true);
    }
  };
  const checkAnswer4 = (answer) => {
    if (answer === "Yes") {
      alert("Go You are not eligible to donate blood Q5");
    } else if (answer === "No") {
      setQ4(true);
    }
  };
  

  return (
    <div style={{ textAlign: "center", marginLeft: "35%", width: "200px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Q1</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>DO you suffer from a high temperature ?</Card.Text>
          <button style={{ width: "18rm" }}
            onClick={() => {
              checkAnswer1("Yes");
            }}
          >
            YES
          </button>

          <button 
            onClick={() => {
              checkAnswer1("No");
            }}
          >
            No
          </button>{" "}
        </Card.Body>
      </Card>

      {q2 && (
        <Card style={{ width: "18rem", marginTop: "50px"}}>
          <Card.Body>
            <Card.Title>Q2</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            Have you taken aspirin within 48 hours?
            </Card.Text>
            <button
              onClick={() => {
                checkAnswer2("Yes");
              }}
            >
              YES
            </button>
            <button
              onClick={() => {
                checkAnswer2("No");
              }}
            >
              No
            </button>
          </Card.Body>
        </Card>
      )}
      {""}

      {q3 && (
        <Card style={{ width: "18rem " ,marginTop: "50px"}}>
          <Card.Body>
            <Card.Title>Q3</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            Have you donated blood in the past 60 days?
            </Card.Text>
            <button
              onClick={() => {
                checkAnswer3("Yes");
              }}
            >
              YES
            </button>
            <button
              onClick={() => {
                checkAnswer3("No");
              }}
            >
              No
            </button>
          </Card.Body>
        </Card>
      )}
      {""}
      {q4 && (
        <Card style={{ width: "18rem" ,marginTop: "50px"}}>
          <Card.Body>
            <Card.Title>Q4</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            Have you had any surgery within the previous 12 months?
            </Card.Text>
            <button
              onClick={() => {
                checkAnswer4("Yes");
              }}
            >
              YES
            </button>
            <button
              onClick={() => {
                checkAnswer4("No");
              }}
            >
              No
            </button>
                       
          </Card.Body>
          <button style={{margin:"20px",backgroundColor:"green"}}><h5>Take An Appointment</h5></button>
        </Card>
      )}
      
    
    
    </div>
  );
}
