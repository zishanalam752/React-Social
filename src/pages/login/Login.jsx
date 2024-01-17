import React, { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
const navigate = useNavigate()
  
  const {login} = useContext(AuthContext);
  const[formData,setFormData]=useState({username:"", password:""})
   function changeHandler(event){
    setFormData((prev)=>{
      return{
        ...prev,[event.target.name]:event.target.value
      }
    })
   }
  const handleLogin = ()=>{
    if(formData.password!=""&&formData.username!=""){
    login();
    navigate('/')
    }
  }

  return (
    <div className="login">
      <div className="card">
        
        <div className="right">
          <h1>Login</h1>
          <form>
            <input required type="text" name="username" placeholder="username" value={formData.username} 
            onChange={changeHandler} />
            <input  required type="password" name="password" placeholder="password" value={formData.password } onChange={changeHandler}/>

            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            consectetur numquam nemo molestias illo non quisquam, ipsum in quae
            totam laudantium iure similique tenetur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button className="btn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
