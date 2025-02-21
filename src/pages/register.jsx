import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
//import Login from './login';



const Register = ({ setIsLoggedIn }) => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleRegister = async () => {

    if (!email || !password || !username) {
      alert("All the fields are neccessary");
      return;
    }

    try {
      await axios.post("http://localhost:3000/register", { username, email, password });
      localStorage.setItem("username", username);
      setIsLoggedIn(true);
      navigate('/home');
    } catch (error) {
      alert("Please check the data entered");
    }

  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className=" p-4 bg-white border rounded shadow flex-column w-25 h-50 d-flex justify-content-center align-items-center bg-light">
        <h2 className="text-center">Register</h2>
        <div className="form-group">
          <input type="text" onChange={(e) => setusername(e.target.value)} class="form-control  m-2" id="Inputusername" aria-describedby="username" placeholder="Enter username"/>
        </div>
        <div className="form-group">

          <input type="email" onChange={(e) => setemail(e.target.value)} class="form-control  m-2" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control p-2  m-2" id="InputPassword" placeholder="Password" />
        </div>
        <button onClick={handleRegister} type="submit" class="btn btn-primary align-self-center m-2">Register</button>
        <p> <Link to="/login">Login</Link></p>
      </div>
    </div>
    
  )

};


export default Register;

