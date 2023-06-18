import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "red",
    textDecoration: isActive && "underline",
  });
  
  return (
    <nav >
      <NavLink to="/" className="navlink" style={getActiveStyle}>
        Home
      </NavLink>
      <NavLink to="/archive" className="navlink" style={getActiveStyle}>
        Archive
      </NavLink>
    </nav>
  );
};

export default Navbar;
