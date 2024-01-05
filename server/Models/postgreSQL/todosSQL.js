// import pool from "./database/localdb.cjs";
import pool from "./database/renderdb.cjs";

  
export class TodoModel {
  static async getAll() {
    try {
      const todos = await pool.query("SELECT * FROM todos ORDER BY utc desc");
      return todos.rows;
    } catch (error) {
      console.error("Error with database query select *", error);
      throw error;
    }
  }

  static async create({ id, title, category, description, completed }) {
    try {
      const newTodo = await pool.query(
        "INSERT INTO todos(title, category, description, completed, id) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [title, category, description, completed, id]
      );
      return newTodo.rows;
    } catch (error) {
      console.error("Error with database query insert newtodo", error);
      throw error;
    }
  }

  static async delete({ id }) {
    try {
      const deleteTodo = await pool.query("DELETE FROM todos WHERE id = $1 RETURNING *", [
        id,
      ]);
      return deleteTodo.rows;
    } catch (error) {
      console.error("Error with database query delete", error);
      throw error;
    }
  }

  static async update({ id, todo }) {
    const { title, category, description, completed } = todo;
    try {
      const updatedTodo = await pool.query(
        "UPDATE todos SET title = $1, category = $2, description = $3, completed = $4 WHERE id = $5 RETURNING *",
        [title, category, description, completed, id]
      );
      return updatedTodo.rows;
    } catch (error) {
      console.error("Error with database query update", error);
      throw error;
    }
  }
}
