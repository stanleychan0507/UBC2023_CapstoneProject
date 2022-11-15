import React from "react";
import RG from "../images/RosenLogo.webp";
import "../CSS/Navbar.css";
import Authentication from "./Authentication/Authentication";

const Navbar = (props) => {
  const saveLoginDataHandler = (enteredLoginData) => {
    const loginData = {
        ...enteredLoginData,
        id: Math.random().toString()
    };
    props.onAddLogin(loginData);
  };

  return (
    <div>
      <nav className="navbar">
        <img src={RG} className="logo" alt="Rosen Group logo" />
        <ul>
          <li>
            <Authentication onSaveLoginData={saveLoginDataHandler}/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
