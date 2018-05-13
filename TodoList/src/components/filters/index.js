/**
 * Filters
 * Renders the filters
 * Handles events associated with toggle filters
 */
import { connect } from 'melody-redux';
import { mapProps } from 'melody-hoc';

import Filters from './filters';
import { filterTodo } from '../../actions/';
import { SHOW_ALL, SHOW_CLOSED, SHOW_OPEN } from '../../reducers/filter';

const filters = [
  { id: SHOW_ALL, value: SHOW_ALL, text: 'Show all' },
  { id: SHOW_OPEN, value: SHOW_OPEN, text: 'Show open' },
  { id: SHOW_CLOSED, value: SHOW_CLOSED, text: 'Show closed' }
];

const enhance = mapProps(props => ({
  ...props,
  filters
}));

const enhancedComponent = enhance(Filters);

const mapStateToProps = ({ filter }) => ({ filter });
const mapDispatchToProps = dispatch => ({
  filterTodo: type => dispatch(filterTodo(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(enhancedComponent);
