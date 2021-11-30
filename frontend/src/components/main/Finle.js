import React from 'react'
import { Form, Button, Card ,Row,Col} from "react-bootstrap";
import "./finle.css";
export default function Finle() {
  const data = JSON.parse(localStorage.getItem("Appoitment"));

    return (
        <div className="main" style={{ marginBottom: "50px",
        textAlign: "center",
        marginLeft: "20%",
        width: "60%",
        height: "600%",
        color:"griy"}} variant=""size="lg"> 
              {data !== null && data.length > 0 ? (
                <Form>
        <Row >
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
                    <div className="sub-main">
                    <Card.Body >
                      <Card.Title>Appoitment</Card.Title>
                      <Card.Text>{elem.hospital}</Card.Text>
                      <Card.Text>{elem.date}</Card.Text>
                    </Card.Body>
                    </div>
                  </Card>
                </Col>
              );
            })}
        </Row>
        </Form>
      ) : null}
        </div>
    )
}
