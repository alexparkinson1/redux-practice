import React from 'react';
import { Route, Switch } from 'react-router' // react-router v4
import App from './App';
import Counter from './views/counter';
import ToDo from './views/to-do';

export default (
  <div>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/counter" component={Counter} />
      <Route path="/to-do" component={ToDo} />
    </Switch>
  </div>
);
