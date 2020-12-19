import React, { Component } from "react";
import Todo from "./Todo";
class TodoList extends Component {
  // state = {
  //   tasks: this.props.tasks,
  // };

  // renderTodo(item) {
  //   return <Todo value={item} onDelete={this.handleDelete(item)} />;
  // }
  render() {
    return (
      <React.Fragment>
        {this.props.tasks.map((value) => (
          <Todo value={value} onDelete={this.props.onDelete} />
        ))}
      </React.Fragment>
    );
  }
}

export default TodoList;
