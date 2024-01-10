// modules
import express, { json } from "express"; // require -> commonJS
import "dotenv/config";
import { createTodoRouter } from "./Routes/todoRouter.js";
import { createUserRouter } from "./Routes/userRouter.js";
import cors from "cors";
import bodyParser from "body-parser";

// después
export const createApp = ({ todoModel, userModel }) => {
  const port = 5432;
  const hostname = "localhost";
  const app = express();
  console.log(todoModel, { todoModel });

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  app.disable("x-powered-by");
  app.use("/todos", createTodoRouter({ todoModel }));
  app.use("/user", createUserRouter({ userModel }));

  app.listen(5432, () => {
    console.log(`server listening on port ${5432}`);
  });
};
