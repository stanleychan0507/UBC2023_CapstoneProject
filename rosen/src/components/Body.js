import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Body() {
    /*Code added to body Explination: 
    These are constant varibales before the return function: 
    These call a reacte function to be bale to show the modal. it is a switch almost
    The html code calls a modal Function in react to create the modal and functions just like a normal wewbsite.
    You have your header, body , extra. In the mody is where all the magic happends.
    ***NOTE the modal and main page look very similar because eventually we will change the main page to look differently. there will not be a refernce photo on the main page *** 
    */
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     {      //Modal dropdown upload pcitures option // 
        } 
        <div className="buttons">
        <Button variant="primary" onClick={handleShow}>Upload</Button>
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
                        <img src='' alt='Refernece Photo' className='referenceBox__refPhoto'/>
                        <span className='refernceBox__defaultTextref'>Image Preview</span>
                    </div>
                    <input type="file" id="refPhoto" name = "refPhoto" accept='.png, .jpeg, .jpg'/>
                        
                     </div>
                    

                    <div className='title'>
                    <h1 className='video'>Video</h1>
                    <div className='referenceBox'>
                    <img src= "" alt = "Video reference" className='referenceBox__VideoPhoto'/>
                    <span className='referenceBox__defaultTextVideo'>Image Preview</span>
                    </div>
                    <input type="file" id="videoPhoto"name = "videoPhoto" accept='.png, .jpeg, .jpg' />
                        
                        </div>
            
                    </div>
                    
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                    </Modal.Footer>
            </Modal>

                     </div>
        
        
        <div className='imagebox'>
            <div className='title'>
                <h1 className='reference'>Reference Photo</h1>
                <div className='referencebox'>
                    
                </div>
                
            </div>
            <div className='title'>
                <h1 className='video'>Video</h1>

                <div className='videobox'>
                    
                </div>
                
            </div>
            
        </div>

    </>
  
  )
  
}

export default Body;




