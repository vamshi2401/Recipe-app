import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/Home";
import PrivateRoute from "./components/privateroute";
import AddRecipe from './components/addrecipe';
import UpdateRecipe from './components/updaterecipe';
import SearchRecipes from "./components/searchrecipe";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn}/>
      <SearchRecipes/>
      <Routes>
        
        <Route path="/" element={<Home /> } />
        <Route path="/auth/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/auth/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={ <Home /> } />
        <Route
          path="/add-recipe"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AddRecipe />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-recipe/:id"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <UpdateRecipe />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
};

export default App;

