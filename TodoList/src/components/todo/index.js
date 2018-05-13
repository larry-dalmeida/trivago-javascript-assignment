/**
 * Todo
 * Renders an individual Todo item
 */
import { createComponent } from 'melody-component';
import { bindEvents } from 'melody-hoc';
import template from './index.twig';

const withChangeHandler = bindEvents({
  toggle: {
    change(event, component) {
      component.props.toggleTodoState(component.props.id);
    }
  }
});

const Todo = createComponent(template);

export default withChangeHandler(Todo);
