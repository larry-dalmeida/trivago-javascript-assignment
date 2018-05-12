import { connect } from 'melody-redux';
import { mapProps } from 'melody-hoc';

import TodoList from './todoList';
import { toggleTodoState } from '../../actions/';
import { SHOW_ALL, SHOW_CLOSED, SHOW_OPEN } from '../../reducers/filter';

const mapStateToProps = ({ todos, filter }) => ({
  todos,
  activeFilterClass: filter === SHOW_ALL ? 'all' : filter === SHOW_OPEN ? 'open' : 'closed'
});

const mapDispatchToProps = dispatch => ({
  toggleTodoState: id => dispatch(toggleTodoState(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
