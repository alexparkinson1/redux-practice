import React, { Component } from 'react';
import RouterLink from './components/link';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterLink url="/counter" text="Go to counter" />
        <RouterLink url="/to-do" text="Go to To-Do" />
      </div>
    );
  }
}

export default App;
