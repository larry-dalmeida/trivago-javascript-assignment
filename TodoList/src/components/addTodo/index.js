import { connect } from 'melody-redux';
import { lifecycle, bindEvents, compose } from 'melody-hoc';

import AddTodo from './addTodo';
import { addTodo } from '../../actions/';

const withClickHandlers = bindEvents({
  add: {
    click(event, component) {
      component.props.addTodo(component.text);
      event.stopPropagation();
    }
  },
  input: {
    change(event, component) {
      component.text = event.target.value;
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
