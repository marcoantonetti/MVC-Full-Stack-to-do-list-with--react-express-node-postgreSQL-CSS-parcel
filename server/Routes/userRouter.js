import { Router } from "express"
import { UserController } from "../Controller/user.js"

export const createUserRouter = ({userModel}) => {

    const userRouter = Router()
    const userController = new UserController({userModel})

    userRouter.get('/', userController.getUsers)
    userRouter.post('/', userController.addUser)


    return userRouter

}