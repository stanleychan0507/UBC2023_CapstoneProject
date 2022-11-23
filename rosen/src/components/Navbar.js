import React from "react";
import RG from "../images/RosenLogo.webp";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";


const Navbar = () => {
  
 // <Authentication onSaveLoginData={saveLoginDataHandler}/>
  return (
    <div>
      <nav className="navbar">
        <img src={RG} className="logo" alt="Rosen Group logo" />
        <ul>
          <li>
              <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
