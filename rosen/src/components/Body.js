import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Body() {
    /*Code added to body Explination: 
    These are constant varibales before the return function: 
    These call a reacte function to be able to show the modal. 
    The html code calls a modal Function in react to create the modal
    You have your header, body , extra.
    ***NOTE the modal and main page look very similar because eventually we will change the main page to look differently. there will not be a refernce photo on the main page *** 
    */

    // this is the JS to upload the Reference Photo 
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [filep, setFilep] = useState();
    const [filev, setFilev] = useState();
    const [hide, setHide] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    function handleChangePhoto(e) {
        console.log(e.target.files);
        if(e.target.files.length!== 0){
          setFilep(URL.createObjectURL(e.target.files[0]));  
          document.getElementById('refernceBox__defaultTextref').style.display = 'none';
        }
    }

    // This is the JS to upload the video 
    function handleChangeVideo(e) {
        console.log(e.target.files);
        if(e.target.files.length!== 0){
          setFilev(URL.createObjectURL(e.target.files[0]));  
        }
        document.getElementById('refernceBox__defaultTextVideo').style.display = 'none';
    }

    // hide and unhide refence box
    function handleHide(){
        setHide(curr => !curr)
    }

    //handle save
    function handleSave(){
        setFilep(false);
        setFilev(false);
        setShow(false)
    }

  return (
    <>
        <div className="buttons">
            <Button variant="primary" onClick={handleShow} className="upload">Upload</Button>
            <Button variant='primary' className='run'>Run</Button>
                <Modal show={show} onHide={handleClose} centered fullscreen={fullscreen} className='UploadModel'>
                    <Modal.Header closeButton className='ModalHead'>
                        <Modal.Title>Upload Options</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='imagebox'>
                            <div className='title'>
                                <h1 className='reference'>Reference Photo</h1>
                                <div className='referenceBox_Photo' id = ' referenceBoxPhoto'>
                                    {
                                        filep ? <img src={filep} alt='Refernece Photo' className='referenceBox__refPhoto' /> 
                                        :
                                        <span className='refernceBox__defaultTextref' id = 'refernceBox__defaultTextref'>Image Preview</span>
                                    } 
                                </div>
                                <input type="file" id="refPhoto" name = "refPhoto" accept='images/*' onChange={handleChangePhoto}/>
                            </div>
                            <div className='title'>
                                <h1 className='video'>Video</h1>
                                <div className='referenceBox_Video' id = 'referenceBoxVideo' >
                                    {
                                        filev ? <video  className='referenceBox__VideoPhoto' poster="" src={filev} />
                                        :
                                        <span className='referenceBox__defaultTextVideo' id = 'refernceBox__defaultTextVideo'>Image Preview</span>
                                    } 
                                </div>
                                <input type="file" id="videoPhoto"name = "videoPhoto" accept='video/*' onChange={handleChangeVideo} /> 
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
        </div>
        <div className='imagebox'>
            <div className='title'>
                <h1 className='reference'>Reference Photo</h1>
                <div className='referencebox' style={hide ? {display: 'none'} : {display:'block'}} >
                    <img src = {filep} className='referenceBox__refPhoto' />
                </div>
                {
                    hide ? <Button onClick={handleHide}>Unhide Reference Photo</Button> : <Button onClick={handleHide}>Hide Reference Photo</Button> 
                }
                
            </div>
            <div className='title'>
                <h1 className='video'>Video</h1>
                <div className='videobox'></div>
            </div>
        </div>

    </>
  )
}

export default Body;




