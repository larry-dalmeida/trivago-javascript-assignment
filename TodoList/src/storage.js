const STORE_NAME = 'todo-app';

export const save = (state) => {
  localStorage.setItem(STORE_NAME, JSON.stringify(state));
};

export const retrieve = () => {
  const stateString = localStorage.getItem(STORE_NAME);
  return stateString !== null ? JSON.parse(stateString) : null;
};

export const initialize = (defaultState) => {
  let state = retrieve();
  if(state === null) {
    state = defaultState;
    save(state);
  }
  return state;
};