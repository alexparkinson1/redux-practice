import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import store from '../store';
import { increment, decrement } from '../actions/counter-actions';
import Button from '../components/button';
import SubHeading from '../components/subheading'
import RouterLink from '../components/link';

const Wrapper = styled.section`
  padding: 0.5rem;

  span {
    margin: 0 1rem;
    color: palevioletred;
  }
`;

class Counter extends React.Component {

  increment = () => {
    store.dispatch(increment());
  }

  decrement = () => {
    store.dispatch(decrement());
  }

  render() {
    return (
      <Wrapper>
        <RouterLink url="/" text="Back" />
        <SubHeading>Counter</SubHeading>
        <div>
          <Button onClick={this.decrement}>-</Button>
          <span>{this.props.count}</span>
          <Button onClick={this.increment}>+</Button>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    count: store.countState.count
  }
}

export default connect(mapStateToProps)(Counter);
