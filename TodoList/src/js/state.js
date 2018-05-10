import {createStore, combineReducers} from 'redux';

/* Reducers */
function todos(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
          return [
            ...state, {
              id: state.length,
              text: action.text,
              done: false
            }
          ];
        case 'TODO_TOGGLE_DONE':
          return state.map((todo) => {
            if(todo.id === action.id) {
              todo.done = !todo.done;
            }
            return todo;
          });
        default:
          return state;
    }
}

function filter(state = 'all', action) {
  switch(action.type) {
    case 'FILTER_TODO':
      return action.filter;
    default:
      return state;
  }
}

export function configureStore(initialState) {
  return createStore(combineReducers({
    todos,
    filter
  }), initialState);
};


