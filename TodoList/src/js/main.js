import '../css/main.css';

import { configureStore, getInitialState, defaultActiveFilter } from './store';
import { render } from './view';
import { registerEventHandlers } from './events';
import * as storage from './storage';

const initialState = {
  //get state from storage OR initialize to default state
  ...storage.initialize(getInitialState()),
  //always set default filter to 'all'
  filter: defaultActiveFilter
};

const store = configureStore(initialState);

store.subscribe(() => {
  const newState = store.getState();
  render(document.body, newState);
  storage.save(newState);
});

render(document.body, store.getState());
registerEventHandlers(store);
