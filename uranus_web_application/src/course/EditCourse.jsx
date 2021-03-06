import React, { useState, useEffect } from "react";
// import { Form, Row, Col, Button } from "react-bootstrap";
import { Button, Card, Input, Container, Row, Col } from "reactstrap";
import {Form} from "react-bootstrap"
// import React, { Component } from 'react'
import Axios from "axios";

export const EditCourse = (props) => {
  const [course, setCourse] = useState({});
  let onChangeInput = ({ target: { name, value } }) => {
    setCourse({ ...course, [name]: value });
    console.log(course);
  };

  let onSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");

    try {
      let courseAdded = await Axios.put(
        `/api/course/update/${props.match.params.id}`,
        course,
        { headers: { "x-auth-token": token } }
      );
      //   console.log(courseAdded);
      props.history.push(`/coruseDetail/${props.match.params.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  //api/course/add
  return (
    <div>
      {/* <Form className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form.Row>
              <Col md={4}>
                <Form.Label>Course name</Form.Label>
                <Form.Control
                  placeholder="Course name"
                  name="courseName"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
              <Col md={4}>
                <Form.Label>Major</Form.Label>
                <Form.Control
                  placeholder="major"
                  name="major"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
              <Col md={4}>
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  placeholder="Duration"
                  name="duration"
                  type="number"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="Course name"
                  as="textarea"
                  name="description"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
            </Form.Row>
            <Button
              className="mt-2"
              variant="primary"
              type="submit"
              onClick={(e) => onSubmit(e)}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form> */}

      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/background2.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container style={{marginTop:"5%"}} >
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto"style={{ fontSize: "34px"}}>Add Course</h3>
                <Form className="register-form">
                  <label>Course Name</label>
                  <Input
                    placeholder="Course Name"
                    type="text"
                    name="courseName"
                    onChange={(e) => onChangeInput(e)}
                  />

                  <Form.Label>Major</Form.Label>
                <Form.Control
                  className="input-select"
                  as="select"
                  custom
                  name="major"
                  onChange={(e) => onChangeInput(e)}
                >
                  <option value="math">Math</option>
                  <option value="computer science">Computer Science</option>
                  <option value="history">History</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="psychology">Psychology</option>
                  <option value="sciences">Sciences</option>
                  <option value="design">Design</option>
                  <option value="physics">Physics</option>
                </Form.Control>
              

                  <label>Duration</label>
                  <Input
                    placeholder="Duration"
                    name="duration"
                    type="number"
                    onChange={(e) => onChangeInput(e)}
                  />

                  <label>Description</label>
                  <Input
                    placeholder="Description"
                    as="textarea"
                    name="description"
                    onChange={(e) => onChangeInput(e)}
                  />
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="submit"
                    onClick={(e) => onSubmit(e)}
                  >
                    Edit Course
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Uranus Group
          </h6>
        </div>
      </div>
    </div>
  );
};
