import React from "react";
import nikeLogo from "../assets/nike.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <img src={nikeLogo} alt="Nike Logo" />
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
    </div>
  );
};

export default Navbar;
