import { combineReducers } from 'redux';
import countReducer from './count-reducer';
import todoReducer from './todo-reducer';

var reducers = combineReducers({
  countState: countReducer,
  toDoState: todoReducer
});

export default reducers;
