import { Router } from "express";
import {TodoController} from '../Controller/todos.js'
import { loginAuthentication } from "../Middleware/authentication.js";

export const createTodoRouter = ({ todoModel }) => {
  const todosRouter = Router();
  const todoController = new TodoController({ todoModel })

  todosRouter.get("/", loginAuthentication ,todoController.getAll);
  todosRouter.post("/", todoController.create);
  todosRouter.delete("/:id", todoController.delete);
  todosRouter.put("/:id", todoController.update);

  return todosRouter;
};


