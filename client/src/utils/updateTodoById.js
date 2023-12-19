  export function updateTodoById(todos, updatedTodo) {
    return todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return { ...todo, ...updatedTodo };
      }
      return todo;
    });
  }