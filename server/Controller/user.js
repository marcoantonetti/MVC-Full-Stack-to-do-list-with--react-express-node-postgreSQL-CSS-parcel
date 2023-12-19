export class UserController {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

   addUser = async (request, resolve) => {
    try {
      const user = await this.userModel.addUser(request.body);
      resolve.json(user);
    } catch (error) {
      console.error("Error creating using", error);
      throw error;
    }
  }

  getUsers = async (request, resolve) => {
    try {
      const user = await this.userModel.getUsers(request.body);
      resolve.json(user);
    } catch (error) {
      console.error("Error creating using", error);
      throw error;
    }
  }


}
