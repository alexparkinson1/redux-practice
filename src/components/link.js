import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  display: block;
`;

class RouterLink extends Component {
  render() {
    return (
      <StyledLink to={this.props.url}>{this.props.text}</StyledLink>
    );
  }
}

export default RouterLink;
