import * as types from '../actions/action-types';

function todoReducer(state = [], action) {
  switch(action.type) {
    case types.ADD:
      return [...state, action.task]
    case types.REMOVE:
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
}

export default todoReducer;
