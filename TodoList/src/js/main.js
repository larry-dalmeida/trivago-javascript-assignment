import '../css/main.css';

import {configureStore} from './state';
import {render} from './view';
import {registerEventHandlers} from './events';

const initialState = {
  filter: 'all',
  todos: [
    {
      id: 0,
      text: 'Take a look at the application',
      done: true
    }, {
      id: 1,
      text: 'Add ability to filter todos',
      done: false
    }, {
      id: 2,
      text: 'Filter todos by status',
      done: false
    }, {
      id: 3,
      text: 'Filter todos by text',
      done: false
    }
  ]
};

const store = configureStore(initialState);
store.subscribe(() => render(document.body, store.getState()));

render(document.body, store.getState());
registerEventHandlers(store);
