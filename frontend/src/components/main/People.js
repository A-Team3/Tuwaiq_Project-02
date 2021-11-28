import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Brand,
  Nav,
  Image,
  Col,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import axios from "axios";

export default function People() {
  const { state } = useLocation();

  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    // Update the peopleData from API
    // console.log("useEffect inside people")
    axios
      .post("users/people", {
        bloodGroup: state.bloodGroup,
      })
      .then((res) => {
        // console.log(res);
        if (res.data.length > 0) setPeopleData(res.data);
        else
            setPeopleData([]);
        if (res.data !== "User not found") {
          //          navigate("/");
        }
        //swal('Incorrect user name or password');
      })
      .catch((err) => {
        //console.log(err);
        //swal('not correct')
      });
  }, [state]);

  return ( 
      peopleData.length > 0?
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>City</th>
            <th>Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {/* how map is used inside table */}

          {peopleData.map((item, i) => {
            return (
              <tr key={i}>
                <td> {i + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>{item.bloodGroup}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  :
     
      <span
        style={{
          display: "block",
          magin: "auto",
          textAlign: "center",
          fontSize: "large",
          fontStyle: "bold",
        }}
      >
        No People Found
      </span>
    );
}
