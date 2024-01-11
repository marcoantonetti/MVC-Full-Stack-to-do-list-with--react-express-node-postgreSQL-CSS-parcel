import pool from "./database/localdb.cjs";
// import pool from "./database/renderdb.cjs";

export class UserModel {
  static async addUser({ username, password }) {
    try { 
      const newUser = await pool.query(
        `INSERT INTO users("userName", password) VALUES ($1, $2) RETURNING *`,
        [username, password]
      );
      return newUser.rows;
    } catch (error) {
      console.error("Error creating user", error);
      throw error;
    }
  }

  static async getUsers() {
    try {
      const users = await pool.query(
        "SELECT * FROM public.users"
      );  
      return users.rows;
    } catch (error) {
      console.error("Error getting users", error);
      throw error;
    }
  }
}
