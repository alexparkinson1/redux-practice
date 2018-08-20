import React, { Component } from 'react';
import Button from '../components/button'

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(task => (
          <li key={task.id}>{task.text} <Button onClick={() => {this.props.onDelete(task.id)}}>Done</Button></li>
        ))}
      </ul>
    );
  }
}
export default TodoList;
