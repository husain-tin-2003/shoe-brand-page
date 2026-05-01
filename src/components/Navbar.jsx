import React from "react";
import nikeLogo from "../assets/nike.png";

const Navbar = () => {
  return (
    <nav className="container">
      <div>
        <img className="logo" src={nikeLogo} alt="Nike Logo" />
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
