import React, { useState, useEffect } from 'react'
import RG from "../images/RosenLogo.webp";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import set from "../images/settings-line-icon.png";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import axios from 'axios'


const Navbar = () => {
  const [showhelp, setShowHelp] = useState(false);
  const handleShowHelp = () =>setShowHelp(true);
  const handleCloseHelp = () => setShowHelp(false);
  const [showSettings, setShowSettings] = useState(false);
  //const handleShowSettings = () =>setShowSettings(true);
  //const handleCloseSettings = () => setShowSettings(false);
  const[frames, setFrames] = useState(10);
  const[frameschanged, setframeschanged] = useState(false)
  const[SI, setSI] = useState(5);
  const[SIchanged, setSIchanged] = useState(false);
  const [updateFile, setupdatefile] = useState(1);
  const[Filename, setFileName] = useState() ;

  function handleChangeFrames(e) {
    setFrames(e.target.value); 
    console.log(frames)
    setframeschanged(true)
    setframeschanged(false)
  }

  function handleShowSettings() {
    setShowSettings(true);
    setupdatefile(updateFile+1)
  }

  function handleCloseSettings() {
    setShowSettings(false);
  }

  function handleChangeSI(e) {
    setSI(e.target.value); 
    console.log(SI)
    setSIchanged(true)
    setSIchanged(false)
  }

  function handleDelete(e){
    e.preventDefault(); 
    console.log(e.target.value)
    const  data = new FormData() 
    const name = e.target.value
    data.append('filename', name)
    axios.post('http://localhost:5000/app/delete/', data)
        .then(res => {
            console.log(res);
            setupdatefile(updateFile+1)
        }).catch(err => {
          console.error(err);
        });
  }

  useEffect(() => {

  }, [frameschanged,setFrames]);

  useEffect(() => {
    
  }, [SIchanged,setSI])

  useEffect(() => {
    fetch('http://localhost:5000/app/folders/').then(res => res.json()).then(data => {
     setFileName(data.Name);
    });
  }, [updateFile ,setFileName]);



  return (
    <div>
      <nav className="navbar">
        <img src={RG} className="logo" alt="Rosen Group logo" />
        <h1 className='ProjectTitle'>Project Title</h1> 
        <ul>
          <li>
             <Button className = "settingsButton" onClick={handleShowSettings}> <img src={set} className="settingsIcon" alt="SettingsButton" /></Button> 
              <Button className="help" onClick={handleShowHelp} > ? </Button>
             {//<Link to="login">Login</Link>
             } 
          </li>
        </ul>
      </nav>
      <Modal show= {showhelp} onHide = {handleCloseHelp} centered>
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

      <Modal className= "Settings" show= {showSettings} onHide = {handleCloseSettings} centered >
        <Modal.Header closeButton className='SettingsHead'> 
          <Modal.Title >
            Settings
          </Modal.Title> 
        </Modal.Header>
       <Modal.Body className='SettingsModal'> 
       <div className='Listgroup'>
          <ListGroup className= " VideoSettings">
            <ListGroup.Item className ="TitleSettings"active >Video Settings</ListGroup.Item>
            <ListGroup.Item>Video cut up frames per secound: 
            <Form.Range min= "1" max = "1000" value = {frames} onChange = {handleChangeFrames}/>
              <p>frames: {frames}/sec</p> 
              <p><i>Note higher the frames slower the program</i></p>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className= "Similar-ImagesSettings">
            <ListGroup.Item className ="TitleSettings"active> Similar-Images Settings</ListGroup.Item>
            <ListGroup.Item>Number of Similar Images:  
              <Form.Label>(1-10000):</Form.Label>
              <Form.Range min= "1" max = "10000" value = {SI} onChange = {handleChangeSI}/>
              <p>SimilarImages: {SI}</p>
            </ListGroup.Item>
          </ListGroup> 
          <ListGroup className= "Similar-ImagesSettings">
            <ListGroup.Item className ="TitleSettings"active> Delete Videos</ListGroup.Item>
            {Filename?.map((value,i) => <ListGroup.Item key = {i} value = {value}>{value} <Button className= "Delete" variant = "danger" value = {value} onClick = {handleDelete}>Delete</Button></ListGroup.Item>)}
           
          </ListGroup>
          </div>
       </Modal.Body>
      </Modal>
    </div>
  );
}
export default Navbar;
