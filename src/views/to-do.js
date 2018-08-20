import React, { Component } from 'react';
import TodoList from './to-do-list';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/button'
import RouterLink from '../components/link'
import SubHeading from '../components/subheading'
import { add, remove } from '../actions/todo-actions';
import store from '../store';

const Wrapper = styled.section`
  padding: 0.5rem;
`;

class TodoApp extends Component {
  handleAdd = (e) => {
    e.preventDefault();

    const value = this.refs.task.value;
    if (value) {
      const task = {
        text: this.refs.task.value,
        id: Date.now()
      };

      store.dispatch(add(task))
      this.refs.task.value = '';
    }
  }

  handleDelete = (id) => {
    store.dispatch(remove(id))
  }

  render() {
    return (
      <Wrapper className="TodoApp">
        <RouterLink url="/" text="Back" />
        <SubHeading>My ToDo List</SubHeading>
        <form>
          <input type="text" ref="task"/>
          <Button onClick={this.handleAdd}>Add</Button>
        </form>
        <TodoList onDelete={this.handleDelete} tasks={this.props.tasks} />
      </Wrapper>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    tasks: store.toDoState
  }
}

export default connect(mapStateToProps)(TodoApp);
