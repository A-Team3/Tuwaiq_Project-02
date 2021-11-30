import React, { useState, useEffect } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

export default function Finle() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const app = JSON.parse(localStorage.getItem("Appoitment"));
    console.log(app);

    const usr = sessionStorage.getItem("userId");

    if (app) {
      const result = app.filter(({ userId }) => {
        return userId == usr;
      });
      console.log(result);
      if (result) setData(result);
      else setData([]);
    }
  }, []);

  return (
    <div>
      {data !== null && data.length > 0 ? (
        <Row>
          {data &&
            data.map((elem) => {
              return (
                <Col>
                  <Card
                    className="myCard"
                    style={{
                      textAlign: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title>Appoitment</Card.Title>
                      <Card.Text>{elem.hospital}</Card.Text>
                      <Card.Text>{elem.date}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      ) : null}
    </div>
  );
}
