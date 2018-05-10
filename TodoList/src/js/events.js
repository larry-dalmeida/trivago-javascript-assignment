import {listen} from './lib/events';
import {addTodo, toggleTodoState, filterTodo} from './actions';

export function registerEventHandlers(store) {
  listen('click', '#addTodo', event => {
    const todoInput = document.getElementById('todoInput');
    store.dispatch(addTodo(todoInput.value));
    event.stopPropagation();
  });

  listen('click', '.js_toggle_todo', event => {
    const id = Number.parseInt(event.target.getAttribute('data-id'), 10);
    store.dispatch(toggleTodoState(id));
  });

  listen('change', '.js_select_filter', event => {
    store.dispatch(filterTodo(event.target.value));
  });
}
