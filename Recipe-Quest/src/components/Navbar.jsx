import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/favorites" className="nav-link" activeClassName="active">
        Favorites
      </NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="active">
        About Us
      </NavLink>
    </nav>
  );
};

export default Navbar;
