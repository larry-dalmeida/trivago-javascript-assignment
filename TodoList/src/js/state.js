import {createStore, combineReducers} from 'redux';

/* Default States */
export const defaultActiveFilter = 'all';
export const defaultState = {
  filter: 'all',
  todos: [
    {
      id: 0,
      text: 'Start a new Trello board for World Domination',
      done: true
    }, {
      id: 1,
      text: 'Invite Gru and Megamind',
      done: false
    }
  ]
};

/* Reducers */
function todos(state = defaultState.todos, action) {
  switch (action.type) {
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
        if (todo.id === action.id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    default:
      return state;
  }
}

function filter(state = defaultState.filter, action) {
  switch (action.type) {
    case 'FILTER_TODO':
      return action.filter;
    default:
      return state;
  }
}

export function configureStore(initialState) {
  return createStore(combineReducers({todos, filter}), initialState);
};
