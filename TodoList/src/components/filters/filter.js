/**
 * Filter
 * Renders an individual filter (example: Show open)
 * Handles events associated with selecting a filter
 */
import { createComponent } from 'melody-component';
import { bindEvents, mapProps, compose } from 'melody-hoc';

import template from './filter.twig';

const FilterComponent = createComponent(template);

const withChangeHandler = bindEvents({
  toggle: {
    change(event, component) {
      component.props.filterTodo(component.props.value);
    }
  }
});

const withAdditionalProps = mapProps(props => {
  return {
    ...props,
    isChecked: props.selectedFilter === props.value
  };
});

const enhancers = compose(withChangeHandler, withAdditionalProps);

export default enhancers(FilterComponent);
