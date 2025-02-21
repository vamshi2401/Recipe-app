import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import '../App.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All the fields are neccessary");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/login", { email, password });
      localStorage.setItem("username", response.data.username);
      setIsLoggedIn(true);
      navigate('/home');
    } catch (error) {
      alert("invalid details");
    }


  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className=" p-4 bg-white border rounded shadow flex-column w-25 h-50 d-flex justify-content-center align-items-center bg-light">
        <h2 className="text-center">Login</h2>
        <div className="form-group">

          <input type="email" onChange={(e) => setemail(e.target.value)} class="form-control  m-2" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control p-2  m-2" id="InputPassword" placeholder="Password" />
        </div>
        <button onClick={handlelogin} type="submit" class="btn btn-primary align-self-center m-2">Login</button>
        <p>New user? <Link to="/register">Register</Link></p>
      </div>
    </div>
    
  )
};

export default Login;