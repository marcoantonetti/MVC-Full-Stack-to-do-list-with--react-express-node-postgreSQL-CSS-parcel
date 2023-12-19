import { TodoModel } from './Models/postgreSQL/todosSQL.js'
import { UserModel } from './Models/postgreSQL/userSQL.js'
import { createApp } from './app.js'

createApp({ todoModel : TodoModel, userModel: UserModel})