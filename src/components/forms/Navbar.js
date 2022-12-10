import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="wrapper">
      <h1>
        <NavLink to="/">My Fitness Tracker App</NavLink>
      </h1>
      <div className="button">
        <button as={NavLink} to="/new">
          New Exercise
        </button>
        <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
}



export default NavBar;
