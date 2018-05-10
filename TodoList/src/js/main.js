import '../css/main.css';

import {configureStore} from './state';
import {render} from './view';
import {registerEventHandlers} from './events';
import * as storage from './storage';

const initialState = storage.retrieve();
const store = configureStore(initialState);

store.subscribe(() => {
  const newState = store.getState();
  render(document.body, newState);
  storage.save(newState);
});

render(document.body, store.getState());
registerEventHandlers(store);
