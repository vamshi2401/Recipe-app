import React from "react";

const Navbar=()=>{
  return  (
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
          <a  class="navbar-brand" href="#">Recipe</a>
          <ul class="navbar-nav me-auto mb-5 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <a class="link-light bg-gradient-success text-white p-2" href="/login">Login </a>/<a class="link-light bg-info p-2" href="/register"> Register</a>

        </div>
      </div>
    </nav>
    </div>
  )
};

export default Navbar;