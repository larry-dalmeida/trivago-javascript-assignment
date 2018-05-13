export const byRecentlyCreated = (todo1, todo2) => todo1.createdAt < todo2.createdAt;

export const sortTodos = (todos, sortFn) => {
  const sortedTodos = [...todos];
  sortedTodos.sort(sortFn);
  return sortedTodos;
};
