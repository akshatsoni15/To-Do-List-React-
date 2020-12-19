import React, { Component } from "react";
import {
  Button,
  Input,
  Container,
  Row,
  Col,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import TodoList from "./TodoList";
class TodoForm extends Component {
  state = {
    value: "",
    tasks: [],
  };
  handleAddtask = (event) => {
    this.setState({ value: event.target.value });
  };
  handleDelete = (item) => {
    const tasks = this.state.tasks.slice();
    const index = tasks.indexOf(item);
    tasks.splice(index, 1);
    this.setState({ tasks });
  };
  handleSubmit = (event) => {
    console.log("here is input", this.state.value, this.state.tasks.length);
    const tasks = this.state.tasks.slice();
    tasks.push(this.state.value);
    console.log("here is input", tasks.length, this.state.tasks.length);
    // const value = "";
    this.setState({ tasks });
    // this.setState({ value });
    console.log("here is input", tasks.length, this.state.tasks.length);
    event.preventDefault();
  };
  render() {
    return (
      <div className="mt-5">
        <Container>
          <Row>
            <Col xs="4" md="4" lg="4" sm="4"></Col>
            <Form inline onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="task"
                  id="addtask"
                  placeholder="Add a task"
                  value={this.state.value}
                  onChange={this.handleAddtask}
                />
              </FormGroup>{" "}
              <Button type="submit">Submit</Button>
            </Form>
          </Row>
        </Container>
        <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default TodoForm;
