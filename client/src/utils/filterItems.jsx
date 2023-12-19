
export const filterCategory = (category,todos) => {
    let filteredArr = [];

    todos.map((todo) => {
      if (todo.category == category) {
        filteredArr.unshift(todo);
      } else {
        filteredArr.push(todo);
      }
    });

    return filteredArr;
  };
