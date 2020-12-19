import React, { Component } from "react";
import { Button, Container, Row, Col, Form, FormGroup } from "reactstrap";
class Todo extends Component {
  // state = {
  //   task: "ddddqdsaddasdsa",
  // };
  render() {
    return (
      <div className="mt-2 mb-2">
        <Container className="align-items-center">
          <Row>
            <Col xs="4" md="4" lg="4" sm="4"></Col>
            <Col xs="auto" md="auto" lg="auto" sm="auto">
              <p>{this.props.value}</p>
            </Col>
            <Col xs="auto" md="auto" lg="auto" sm="auto">
              <Button outline color="danger" onClick={this.props.onDelete}>
                Delete
              </Button>
            </Col>
            <Col xs="4" md="4" lg="4" sm="4"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Todo;
