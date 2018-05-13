import { render } from 'melody-component';
import { provide } from 'melody-redux';

import './scss/main.scss';
import app from './components/app';
import { isEnabled } from './lib/feature';
import * as storage from './storage';
import { configureStore, getInitialState, defaultActiveFilter } from './store';

/* Configure Store */
const initialState = {
  //get state from storage OR initialize to default state
  ...storage.initialize(getInitialState()),
  //always set default filter to show all todo
  filter: defaultActiveFilter
};

const store = configureStore(initialState);
//save store to storage whenever it updates
store.subscribe(() => storage.save(store.getState()));

/* Render */
const documentRoot = document.getElementById('app');
render(documentRoot, provide(store, app), {
  isRenderBottom: isEnabled('renderBottom'),
  hasFilter: isEnabled('filter')
});
