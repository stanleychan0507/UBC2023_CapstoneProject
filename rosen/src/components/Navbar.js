import React, { useEffect, useState } from 'react'
import RG from "../images/RosenLogo.webp";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';


const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () =>setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <nav className="navbar">
        <img src={RG} className="logo" alt="Rosen Group logo" />
        <h1 className='ProjectTitle'>Project Title</h1> 
        <ul>
           
          <li>
              
              <Button className="help" onClick={handleShow} > ? </Button>
              <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
      <Modal show= {show} onHide = {handleClose} centered>
        <Modal.Header closeButton className='helpHead'> 
          <Modal.Title >
            How To Run The Program
          </Modal.Title> 
        </Modal.Header>
       <Modal.Body> 

        <div className='HelpModal_Information'> 
          <list> 
              <p> Step1: Click the upload button on the top left hand side of the page</p>
              <p> Step2: Upload a video and reference photo you wish to find in the video</p>
              <p> Step3: Press save to continue to training </p>
              <p> Step4: Press the run under the video to start training </p>
              <p> Volia</p> 
          </list>
        </div>
       </Modal.Body>
            <Modal.Footer>
               <p> For more infromation or any problems Contact Matthias at: email.com</p>
            </Modal.Footer>
        
      </Modal>



    </div>
  );
}

export default Navbar;
