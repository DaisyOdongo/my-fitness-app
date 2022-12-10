import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h4>My Fitness App</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex ">
            <NavLink to="/user/sign">
              <button className="btn btn-outline-success">SignUp</button>
            </NavLink>
            <NavLink to="/user/sign">
              <button className="btn btn-outline-primary">Login</button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
