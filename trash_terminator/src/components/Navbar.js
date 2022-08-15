import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <h1>
          <strong>Trash Terminator</strong>
        </h1>
      </a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <h3>Home</h3>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <h3>About Us</h3>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <h3>Cart</h3>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <h3>Login</h3>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
