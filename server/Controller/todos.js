export class TodoController {
  constructor({ todoModel }) {
    this.todoModel = todoModel;
  }

  
  getAll = async (request ,resolve) => {
    try {
      const todos = await this.todoModel.getAll();
      resolve.json(todos);
    } catch (error) {
      console.error("Failed to access model.getall()", error);
      throw error;
    }
  }

  create = async (request, resolve) => {
    try {
      const newTodo = await this.todoModel.create(request.body);
      resolve.json(newTodo)
    } catch (error) {
      console.error("Failed to access model.create()", error);
      throw error;
    }
  }

  delete = async (request, resolve) => {
    try {
      const { id } = request.params;
      const deletedTodo = await this.todoModel.delete({ id });
      resolve.json(deletedTodo)
    } catch (error) {
      console.error("Failed to access model.delete()", error);
      throw error;
    }
  }

  update = async (request, resolve) => {
    try {
      const { id } = request.params;
      const newTodo = await this.todoModel.update({ id, todo:request.body });
      resolve.json(newTodo)
    } catch (error) {
      console.error("Failed to access model.update()", error);
      throw error;
    }
  } 
}
