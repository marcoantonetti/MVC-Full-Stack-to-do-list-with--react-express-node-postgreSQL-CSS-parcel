export const deleteTodoById = (todos, deleteTodo) => {
    return todos.filter((todo) => !(todo.id == deleteTodo.id))
}