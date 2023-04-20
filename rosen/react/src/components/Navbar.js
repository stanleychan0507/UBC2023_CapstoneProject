import React, { useState, useEffect } from 'react'
import RG from "../images/RosenLogo.webp";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import set from "../images/settings-line-icon-2.png";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import axios from 'axios'


const Navbar = () => {
  const [showhelp, setShowHelp] = useState(false);
  const handleShowHelp = () =>setShowHelp(true);
  const handleCloseHelp = () => setShowHelp(false);
  const [showSettings, setShowSettings] = useState(false);
  const[frames, setFrames] = useState(10);
  const[frameschanged, setframeschanged] = useState(false)
  const[SI, setSI] = useState(5);
  const[SIchanged, setSIchanged] = useState(false);
  const [updateFile, setupdatefile] = useState(1);
  const[Filename, setFileName] = useState() ;

  
  //sends fps and similar images to the backend after modal is closed
  function handleCloseSettings() {
    const data = new FormData();
    data.append('frames',frames);
    data.append('SI',SI);
    axios.post('http://localhost:5000/app/settings/', data)
      .then(res => {
        console.log(res);
        setFrames(res.data.array[0])
        setSI(res.data.array[1])
      }).catch(err => {
        console.error(err);
      })
    setShowSettings(false)
  };
  
  //set frame value to a state
  function handleChangeFrames(e) {
    setFrames(e.target.value); 
    console.log(frames)
    setframeschanged(true)
    setframeschanged(false)
  }

  //executes when the settings button is clicked
  function handleShowSettings() {
    setShowSettings(true);
    setupdatefile(updateFile+1)
  }

  //set similar images value to a state
  function handleChangeSI(e) {
    setSI(e.target.value); 
    console.log(SI)
    setSIchanged(true)
    setSIchanged(false)
  }

  //deletes video file from backend
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

  //retrive video file name from backend
  useEffect(() => {
    fetch('http://localhost:5000/app/folders/').then(res => res.json()).then(data => {
     setFileName(data.Name);
    });
  }, [updateFile ,setFileName]);



  return (
    <div>
      <nav className="navbar">
        <img src={RG} className="logo" alt="Rosen Group logo" />
        <h1 className='ProjectTitle'>Similar search</h1> 
        <ul>
          <li>
             <Button className = "settingsButton" onClick={handleShowSettings}> <img src={set} className="settingsIcon" alt="SettingsButton" /></Button>
              {//shows help modal
              }
              <Button className="help" onClick={handleShowHelp} > ? </Button>
             {<Link to="login">Login</Link>
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
              <p> Step1: Click the Upload new Video Button</p>
              <p> Step2: Upload a video and give it a name make sure its no a duplicate name</p>
              <p> Step3: Press Save and wait for the video to turn into images</p>
              <p> Step4: Now upload a refence photo to find similar searches for  </p>
              <p> Step5: Press the run button and wait for the magic to happen</p> 
              <p> Step 6: To download a simlar image click on the image in the video pannel. The time stamp under each video lets you know where in the video it was cut </p>
              <p>Bonus Infromation: if you want to delete, changes the frames of the video, or get more similar images click the setting icon.</p>
          </list>
        </div>
       </Modal.Body>
            <Modal.Footer>
               <p> For more infromation or any problems Contact Matthias at: mpeussner@rosen-group.com</p>
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
            <Form.Range min= "1" max = "24" value = {frames} onChange = {handleChangeFrames}/>
              <p>frames: {frames}/sec</p> 
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className= "Similar-ImagesSettings">
            <ListGroup.Item className ="TitleSettings"active> Similar-Images Settings</ListGroup.Item>
            <ListGroup.Item>Number of Similar Images:  
              <Form.Label>(1-10000):</Form.Label>
              <Form.Range min= "1" max = "1000" value = {SI} onChange = {handleChangeSI}/>
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
