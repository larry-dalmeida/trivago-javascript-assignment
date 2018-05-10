import { defaultState } from './state';

const STORE_NAME = 'todo-app';

export const save = (state) => {
  localStorage.setItem(STORE_NAME, JSON.stringify(state));
};

export const retrieve = () => {
  let state = JSON.parse(localStorage.getItem(STORE_NAME));
  if(state === null) {
    state = defaultState;
    save(state);
  }
  return state;
};