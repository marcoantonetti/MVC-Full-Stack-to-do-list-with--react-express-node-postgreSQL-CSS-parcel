import { useState } from "react";
import apiService from "../../services/apiService";

export const LoginForm = (getUser) => {

  //useStates
  const [account, setAccount] = useState(false)
  // State to store form input values
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Functions  
  const handleInputChange = (e) => {
    const { name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
          e.preventDefault();
          account ? Object.values(getUser)[0](formData) : await apiService.post({endPoint: 'user'}, formData)  // getUser(Formdata)
          // Clear the form inputs
            setFormData({
              username: '',
              password: '',
            });
            setAccount(true)
        };


  return (
    
    <div className="login-container">
      <h2>{account ? "Login"  : "Create Account"}</h2>
      <form className="login-form" action="#" method="post" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={(e) => handleInputChange(e)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={(e) => handleInputChange(e)} required />
        </div>
        <div className="form-group">
          <button type="submit">{account ? "Login"  : "Create"}</button>
        </div>
      </form>
    </div>
  );};