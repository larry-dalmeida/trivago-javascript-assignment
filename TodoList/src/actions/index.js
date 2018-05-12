/* types */
export const TODO_TOGGLE_DONE = 'TODO_TOGGLE_DONE';
export const ADD_TODO = 'ADD_TODO';
export const FILTER_TODO = 'FILTER_TODO';

/* action creators */
export function toggleTodoState(id) {
  return {type: 'TODO_TOGGLE_DONE', id};
}

export function addTodo(text) {
  return {type: 'ADD_TODO', text};
}

export function filterTodo(filter) {
  return {type: 'FILTER_TODO', filter};
}