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
    <div className="questions"
      
    >
       <Card className="CardQuestions" >


        <Card.Body>

          <Card.Title>Q1</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>DO you suffer from a high temperature ?</Card.Text>
          <Button className="ButtonQuestions1"
            as={Col}
            
            onClick={() => {
              checkAnswer1("Yes");
            }}
          >
            YES
          </Button>
          <Button className="ButtonQuestions2"
            as={Col}
            
            onClick={() => {
              checkAnswer1("No");
            }}
          >
            No
          </Button>{" "}
        </Card.Body>
      </Card>
      {q2 && (
        <Card className="CardQuestions"
     
        >
          <Card.Body>
            <Card.Title>Q2</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>Have you taken aspirin within 48 hours?</Card.Text>
            <Button className="ButtonQuestions1"
              as={Col}
              
              onClick={() => {
                checkAnswer2("Yes");
              }}
            >
              YES
            </Button>
            <Button className="ButtonQuestions2"
              as={Col}
              
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
        <Card className="CardQuestions"
  
        >
          <Card.Body>
            <Card.Title>Q3</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>Have you donated blood in the past 60 days?</Card.Text>
            <Button className="ButtonQuestions1"
              as={Col}
              
              onClick={() => {
                checkAnswer3("Yes");
              }}
            >
              YES
            </Button>
            <Button className="ButtonQuestions2"
              as={Col}
              
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
        <Card className="CardQuestions"
    
        >
          <Card.Body>
            <Card.Title>Q4</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
              Have you had any surgery within the previous 12 months?
            </Card.Text>
            <Button className="ButtonQuestions1"
              as={Col}
              
              onClick={() => {
                checkAnswer4("Yes");
              }}
            >
              YES
            </Button>

            <Button className="ButtonQuestions2"
              as={Col}
              
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
        
        <Button className="ButtonQuestions3"
       
          onClick={() => {
            navigate("/Success");
          }}
        >
          Take An Appointment
        </Button>
        
      )}
    </div>
  ) : (
    <span className="spanQuestions"
      
    >
      You are not eligible to donate blood
    </span>
  );
}
