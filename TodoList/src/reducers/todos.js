import { ADD_TODO, TODO_TOGGLE_DONE } from '../actions';

export const defaultTodoState = [
  {
    id: 0,
    text: 'Start a new Trello board for World Domination',
    done: true,
    createdAt: Date.now()
  },
  {
    id: 1,
    text: 'Invite Gru and Megamind',
    done: false,
    createdAt: Date.now()
  }
];

export default function todos(state = defaultTodoState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          createdAt: Date.now(),
          done: false
        }
      ];
    case TODO_TOGGLE_DONE:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    default:
      return state;
  }
}
