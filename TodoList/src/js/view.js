import {isEnabled} from './lib/feature';

export function render(el, state) {
  const {todos, filter} = state;
  const todoItems = todos
    .map(renderTodoItem)
    .join('');
  el.innerHTML = renderApp(renderInput(), renderTodos(todoItems, filter), renderFilters(filter));
}

function renderApp(input, todoList, filter) {
  let view = isEnabled('renderBottom')
    ? renderAddTodoAtBottom(input, todoList)
    : renderAddTodoAtTop(input, todoList);

  if (isEnabled('filter')) {
    view += filter;
  }

  return view;
}

function renderAddTodoAtTop(input, todoList) {
  return `<div id="app">
        ${input}
        ${todoList}
    </div>`;
}

function renderAddTodoAtBottom(input, todoList) {
  return `<div id="app">
        ${todoList}
        ${input}
    </div>`;
}

function renderInput() {
  return `<div class="todo__input"><input type="text" id="todoInput"><button id="addTodo">Add</button></div>`;
}

function renderFilters(filter) {
  return `
    <div class="todo__filter">
      <label for="showAll">
        <input class="js_select_filter" type="radio" id="showAll" name="filter" value="all" ${filter === 'all'
    ? 'checked'
    : ''}>
        Show all
      </label>

      <label for="showOpen">
        <input class="js_select_filter" type="radio" id="showOpen" name="filter" value="open" ${filter === 'open'
      ? 'checked'
      : ''}>
        Show open
      </label>

      <label for="showClosed">
        <input class="js_select_filter" type="radio" id="showClosed" name="filter" value="closed" ${filter === 'closed'
        ? 'checked'
        : ''}>
        Show closed
      </label>
    </div>
  `;
}

function renderTodos(todoItems, filter) {
  return `<ul class="todo todo--show-${filter}">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  const todoClass = `todo__item todo__item--${todo.done
    ? 'done'
    : 'open'}`;
  return `<li class="${todoClass}">
        <input class="js_toggle_todo" type="checkbox" data-id="${todo.id}"${todo.done
    ? ' checked'
    : ''}>
        ${todo.text}
    </li>`;
}
