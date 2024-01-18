import React from "react";
import "../Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigateTo = useNavigate();
  const GoTo = (path) => {
    navigateTo(path);
  };
  return (
    <nav className="navbar">
      <ul>
        <li>
          <h2 onClick={() => GoTo("/profile")}>Profile</h2>
        </li>
        <li>
          <h2 onClick={() => GoTo("/dashboard")}>Dashboard</h2>
        </li>
        <li>
          <h2 onClick={() => GoTo("/")}>Login</h2>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
