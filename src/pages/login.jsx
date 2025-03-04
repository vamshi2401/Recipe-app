import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import '../App.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState("");
  const [error, setError]=useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All the fields are neccessary");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("https://recipe-app-backend-mmsp.onrender.com/login", { email, password });
      localStorage.setItem("username", response.data.username);
      setIsLoggedIn(true);
      navigate('/home');
    } catch (error) {
      setError("invalid details");
    } finally {
      setLoading(false);
    }


  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-info">
      <div className=" p-4 bg-white border rounded shadow flex-column w-25 h-50 d-flex justify-content-center align-items-center bg-light">
        <h2 className="text-center">Login</h2>
        {error && <div className="alert alert-danger p-2">{error}</div>}
        <div className="form-group">

          <input type="email" onChange={(e) => setemail(e.target.value)} class="form-control  m-2" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control p-2  m-2" id="InputPassword" placeholder="Password" />
        </div>
        <button onClick={handlelogin} type="submit" class="btn btn-primary align-self-center m-2" disabled={loading}>{loading ? "Logging in ..." : "Register"}</button>
        <p>New user? <Link to="/register">Register</Link></p>
      </div>
    </div>
    
  )
};

export default Login;