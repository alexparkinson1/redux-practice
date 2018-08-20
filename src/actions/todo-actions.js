import * as types from './action-types';

export function add(task) {
  return {
    type: types.ADD,
    task
  };
}

export function remove(id) {
  return {
    type: types.REMOVE,
    id
  };
}
