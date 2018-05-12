import { FILTER_TODO } from '../actions';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_OPEN = 'SHOW_OPEN';
export const SHOW_CLOSED = 'SHOW_CLOSED';

//always show all by default
export const defaultFilterState = SHOW_ALL;

export default function filter(state = defaultFilterState, action) {
  switch (action.type) {
    case FILTER_TODO:
      return action.filter;
    default:
      return state;
  }
}
