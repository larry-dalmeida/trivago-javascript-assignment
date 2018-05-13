/**
 * AddTodo
 * Renders the text box and 'Add' button needed to add new todo
 * Handles events associated with adding a new todo
 */
import { connect } from 'melody-redux';
import { lifecycle, bindEvents, compose } from 'melody-hoc';

import AddTodo from './addTodo';
import { addTodo } from '../../actions/';

const handleAddTodo = component => {
  if (component.text.trim().length !== 0) {
    /* dispatch action */
    component.props.addTodo(component.text);
  }
  /* set focus on text box after adding a new todo */
  const textbox = component.el.querySelector('.todo__input');
  component.text = '';
  textbox.value = '';
  textbox.focus();
};

const withClickHandlers = bindEvents({
  add: {
    click(event, component) {
      event.stopPropagation();
      handleAddTodo(component);
    }
  },
  input: {
    change(event, component) {
      component.text = event.target.value;
    },
    keypress(event, component) {
      component.text = event.target.value;
      if (event.key === 'Enter') {
        handleAddTodo(component);
      }
    }
  }
});

const enhance = lifecycle({
  componentWillMount() {
    this.text = '';
  }
});

const enhancedComponent = compose(enhance, withClickHandlers)(AddTodo);

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(null, mapDispatchToProps)(enhancedComponent);
