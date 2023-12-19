import { useEffect, useState } from "react";
import apiService from "./services/apiService";
// Components
import { NewTodoForm } from "./components/form/new-todo-form";
import { TodoList } from "./components/todoList";
import FilterDropdown from "./components/filterDropdown";
import {LoginForm} from "./components/form/loginForm";
// Utils functions
import { filterCategory } from "./utils/filterItems";
import { updateTodoById } from "./utils/updateTodoById";
import { deleteTodoById } from "./utils/deleteTodoById";
import { addTodo } from "./utils/addData";


function App() {

  // Hooks
  const [todos, setTodos] = useState([]);
  const [userLogin, setUserLogin] = useState(false)
  const [user, setUser] = useState('')

  useEffect(() => {
    getData();
  }, [userLogin]);

  // Functions

   const authenticateUser = async (user) => {
    try {
      const userFromDB = await apiService.get({endPoint:'user'})
      if(userFromDB.some(users => (users.userName == user.username && users.password == user.password ) )){
        setUserLogin(true)
        setUser(user.username)
      } else alert('invalid user')
    } catch (error) {
      console.error('Error getting user')
      throw error
    }
   };

  const postData = async (title, category, description) => {
    const todo = {
      id: crypto.randomUUID(),
      title: title,
      category: category,
      description: description,
      completed: false,
    };
    try {
      const newTodo = await apiService.post({endPoint:'todos'}, todo)
      setTodos(addTodo(todos, newTodo))
    } catch (error) {
      console.error("POST DATA ERROR", error);
    }
  };

  const getData = async () => {    
    try {
      const data = await apiService.get({endPoint:'todos'})
      setTodos(data);
    } catch (error) {
      console.error("GET DATA ERROR", error.message);
    }
  };

  const editData = async ({ ...todo }) => {
    try {
      const updatedTodo = await apiService.edit({endPoint:`${todo.id}`}, todo)      
      setTodos(updateTodoById(todos, updatedTodo[0]))
    } catch (error) {
      console.error("EDIT DATA ERROR", error);
    }
  };

  const deleteData = async (id) => {
    try {
      const deletedTodo = await apiService.delete({endPoint:`${id}`})
      setTodos(deleteTodoById(todos, deletedTodo[0]))
    } catch (error) {
      console.error("DELETE DATA ERROR", error);
    } 
  };

   const filterTodos = (category) => {
     setTodos(filterCategory(category,todos));
   }
  

  return (
    <>
    {userLogin ?     
    <>
      <h1 className="header">Full-Stack App:</h1>
      <h3>React, Node.js, express.js, postgreSQL</h3>
      <h4>User: {user}</h4>
      <NewTodoForm onSubmit={postData} />
      <h2 className="header">TO DO LIST</h2>
      <FilterDropdown todos={todos} filter={filterTodos} />
      <TodoList todos={todos} deleteItem={deleteData} editItem={editData} 
      />
    </> :
    <LoginForm getUser={authenticateUser}/>
  } 
    </>
  );
}

export default App;
