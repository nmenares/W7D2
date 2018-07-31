import {RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';
import merge from 'lodash/merge';


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let result = {};
      action.todos.forEach(todo => result[todo.id] = todo);
      return result;

    case RECEIVE_TODO:
      let copyState = merge({}, state);
      let todo = {};
      todo[action.todo.id] = action.todo;
      copyState = merge(copyState, todo);

      return copyState;

    default:
      return state;
  }
};


export default todosReducer;
