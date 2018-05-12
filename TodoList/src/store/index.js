import { createStore } from 'redux';

import rootReducer from '../reducers';

import { defaultFilterState } from '../reducers/filter';
import { defaultTodoState } from '../reducers/todos';

export const getInitialState = () => ({
  filter: defaultFilterState,
  todos: defaultTodoState
});

export const defaultActiveFilter = defaultFilterState;

export function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
