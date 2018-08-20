import { createStore } from 'redux'
import { connectRouter } from 'connected-react-router'
import reducers from './reducers';
import history from './history';

const store = createStore(
  connectRouter(history)(reducers),
)

export default store;
