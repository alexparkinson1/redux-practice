import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';
import router from './router';
import store from './store';
import history from './history'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {router}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
