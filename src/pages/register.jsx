import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
//import Login from './login';



const Register = ({ setIsLoggedIn }) => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]=useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");

  const handleRegister = async () => {

    if (!email || !password || !username) {
      setError("All the fields are neccessary");
      return;
    }

    const emailRegex = '/^[^@]+@[^@]+[^@]+$/';
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await axios.post("http://localhost:3000/register", { username, email, password });
      localStorage.setItem("username", username);
      setIsLoggedIn(true);
      navigate('/home');
    } catch (error) {
      setError("Registration falied! Please check the data entered");
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className=" p-4 bg-white border rounded shadow flex-column w-25 h-50 d-flex justify-content-center align-items-center bg-light">
        <h2 className="text-center">Register</h2>
        {error && <div className="alert alert-danger p-2">{error}</div>}
        <div className="form-group">
          <input type="text" onChange={(e) => setusername(e.target.value)} className="form-control  m-2" id="Inputusername" aria-describedby="username" placeholder="Enter username"/>
        </div>
        <div className="form-group">

          <input type="email" onChange={(e) => setemail(e.target.value)} className="form-control  m-2" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control p-2  m-2" id="InputPassword" placeholder="Password" />
        </div>
        <button onClick={handleRegister} type="submit" class="btn btn-primary align-self-center m-2" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
        <p> <Link to="/login">Login</Link></p>
      </div>
    </div>
    
  )

};


export default Register;

