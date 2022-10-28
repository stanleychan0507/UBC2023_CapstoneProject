import React from 'react'
import RG from "../images/RosenLogo.webp"
import "../CSS/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <img src={RG} className="logo" alt="Rosen Group logo"/>
        <ul>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;