import React, { useEffect, useState } from 'react'
import RG from "../images/RosenLogo.webp";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import Modal from 'react-bootstrap/Modal';


const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () =>setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <nav className="navbar">
        <img src={RG} className="logo" alt="Rosen Group logo" />
        <ul>
          <li>
            <button className="help" onClick={handleShow}> ? </button>
              <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
      <Modal show= {show} onHide = {handleClose} centered>
        <Modal.Header> 
          <Modal.Title>
            How To Run The Program
          </Modal.Title> 
        </Modal.Header>
       <Modal.Body> 
          <div> 
          Step1: 
          
          </div>
          <div> 
          Step2: 
          
          </div>
          <div> 
          Step3: 
          
          </div>
          <div> 
           Step4: 
          
         </div>
         <div> 
            Volia
          
        </div>
       </Modal.Body>
        
        
         </Modal>



    </div>
  );
}

export default Navbar;
