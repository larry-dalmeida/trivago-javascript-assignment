import { FILTER_TODO } from '../actions';

//always show all by default
export const defaultFilterState = 'all';

export default function filter(state = defaultFilterState, action) {
  switch (action.type) {
    case FILTER_TODO:
      return action.filter;
    default:
      return state;
  }
}
