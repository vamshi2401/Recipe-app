import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <a class="navbar-brand" href="/">Recipeapp</a>
            <ul class="navbar-nav me-auto mb-5 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-recipe">
                    Add Recipe
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/update-recipe">
                    update Recipe
                  </Link>
                </li>
              </>
            )}
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/auth/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/auth/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-link"
                  onClick={() => {
                    localStorage.removeItem("username");
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </li>
            )}

            </ul>
            
            

          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;