import * as types from '../actions/action-types';

const initialState = {
  count: 0
};

function countReducer(state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT:
      return {
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        count: state.count -1
      };
    default:
      return state;
  }
}

export default countReducer;
