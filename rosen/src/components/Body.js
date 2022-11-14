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

    // this is the JS to upload the Reference Photo 
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    document.getElementById('refernceBox__defaultTextref');

    const [filep, setFilep] = useState();
    function handleChangePhoto(e) {
        console.log(e.target.files);
        if(e.target.files.length!== 0){
          setFilep(URL.createObjectURL(e.target.files[0]));  
        }
        document.getElementById('refernceBox__defaultTextref').style.display = 'none';
        
    }
// This is the JS to upload the video 
    const [filev, setFilev] = useState();
    function handleChangeVideo(e) {
        console.log(e.target.files);
        if(e.target.files.length!== 0){
          setFilev(URL.createObjectURL(e.target.files[0]));  
        }
        document.getElementById('refernceBox__defaultTextVideo').style.display = 'none';
        
    }

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

{ // This is the html too upload REFERENCE Photo //
}

                    <div className='title'>
                    <h1 className='reference'>Reference Photo</h1>
                   
                     <div className='referenceBox_Photo' id = ' referenceBoxPhoto'>
                      <span className='refernceBox__defaultTextref' id = 'refernceBox__defaultTextref'>Image Preview</span>   
                    { filep && (
                   
                        <img src={filep} alt='Refernece Photo' className='referenceBox__refPhoto' />
                    
                    ) } 
                    </div>
                     <input type="file" id="refPhoto" name = "refPhoto" accept='images/*' onChange={handleChangePhoto}/>
                     </div>

{
    // this is the HTML to upload the VIDEO 
}
                    <div className='title'>
                    <h1 className='video'>Video</h1>

                    <div className='referenceBox_Video' id = 'referenceBoxVideo' >
                    <span className='referenceBox__defaultTextVideo' id = 'refernceBox__defaultTextVideo'>Image Preview</span>  
                       { filev && (
                    <video  className='referenceBox__VideoPhoto'
                    poster=""
                    src={filev} />
               
               ) } 
                    </div>
                    <input type="file" id="videoPhoto"name = "videoPhoto" accept='video/*' onChange={handleChangeVideo} />
                        
                        </div>
            
                    </div>

                </Modal.Body>
                    <Modal.Footer>
                        {
                            //This is the save and close button at the bottom of the Modal
                        }
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                    </Modal.Footer>
            </Modal>

                     </div>
        
        
        <div className='imagebox'>
            <div className='title'>
                <h1 className='reference'>Reference Photo</h1>
                <div className='referencebox'>
                    <img src = {filep} className='referenceBox__refPhoto' />
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




