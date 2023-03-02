import React, { createElement, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from './Navbar';
import axios from 'axios'
import ReactDOM from 'react-dom/client'





function Body() {
    /*Code added to body Explination: 
    These are constant varibales before the return function: 
    These call a reacte function to be able to show the model. 
    The html code calls a model Function in react to create the modal
    You have your header, body , extra.
    ***NOTE the modal and main page look very similar because eventually we will change the main page to look differently. there will not be a refernce photo on the main page *** 
    */

    // this is the JS to upload the Reference Photo 
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [filep, setFilep] = useState();
    const [filev, setFilev] = useState();
    const [uploadP, setUploadP] = useState();
    const [upLoadV, setUploadV] = useState();
    const [hide, setHide] = useState(false);
    const [currStateP,setCurrStateP]=useState(false);
    const [currStateV,setCurrStateV]=useState(false);
    const [image,setImage]=useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    function handleChangePhoto(e) {
        console.log(e.target.files[0]);
        if(e.target.files.length!== 0){
          setFilep(URL.createObjectURL(e.target.files[0]));
          setUploadP(e.target.files[0])
          setCurrStateP(true)
          document.getElementById('refernceBox__defaultTextref').style.display = 'none';
        }
    }
   
    // This is the JS to upload the video 
    function handleChangeVideo(e) {
        console.log(e.target.files);
        if(e.target.files.length!== 0){
          setFilev(URL.createObjectURL(e.target.files[0]));  
          setUploadV(e.target.files[0])
          setCurrStateV(true)
        }
        document.getElementById('refernceBox__defaultTextVideo').style.display = 'none';
    }

    // hide and unhide refence box
    function handleHide(){
        setHide(curr => !curr)
    }

    //handle uploaded documents and calls backend to find similar images
    function handleSaveChanges(e){
        e.preventDefault()
        setShow(false)
        handleClose();
    }

    function handleCloseModal(){
        setFilep(null);
        setUploadP(null);
        setFilev(null);
        setUploadV(null);
        handleClose();
        setCurrStateP(false);
        setCurrStateV(false);
    }
    

    function RunProgram(e) {
        e.preventDefault()
        const data = new FormData()
        data.append('photo',uploadP)
        data.append('video',upLoadV)
        
      // createDiv(); 
          
        axios.post('http://localhost:5000/app/upload/', data)
        .then(res => {
            setImage(res.data)
            //const string = "data:image/jpeg;base64," + res.data.image ; 
            // const root = ReactDOM.createRoot(
            //     document.getElementById('videobox')
            //   );
            //  const el= React.createElement("img", {className:"test",src:string}, null );
            //  root.render(el)
        })
    }


    function createDiv(length, imgsrc) {
        const root = ReactDOM.createRoot(
            document.getElementById('videobox')
          );
         
          const list = createImg(length,imgsrc)
          const listItems = list.map((list, index) =>
          <span key = {index}>{list}</span>  
          );
          CreateEl(listItems); 
          function CreateEl(list){
            const element = React.createElement("div", {id:"SimImg"}, list); 
            root.render(element)
          }

          function createImg(num, imgsrc){
            var Arraylist = []
            for(var i = 0; i < num; i++){
                var place = imgsrc[i].substr(1);
                var palcsrcimg = "/flask/" + place; 
                Arraylist[i] =  React.createElement("img", {className:"test",src:"/jeep.jpg"}, null );
            }
            return Arraylist;
          }
          
          
    }
    
  return (
    <>
     
        <Navbar/>
        <div className="buttons">
            <Button variant="primary" onClick={handleShow} className="upload">Upload</Button>
            { hide ? <Button className='unhide' onClick={handleHide}>Unhide Reference Photo</Button>: ''}

            
            {      //--------------Modal Page -----------------// 
        } 
                <Modal show={show} onHide={handleClose} centered fullscreen={fullscreen} className='UploadModel'>
                    <Modal.Header closeButton className='ModalHead'>
                        <Modal.Title>Upload Options</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div className='imagebox'>
                                <div className='titleModelRef'>
                                    <h1 className='reference'>Reference Photo</h1>
                                    <div className='referenceBox_Photo' id = 'referenceBoxPhoto'>
                                        {
                                            currStateP ? <img src={filep} alt='Refernece Photo' className='referenceBox__refPhoto' /> 
                                            :
                                            <span className='refernceBox__defaultTextref' id = 'refernceBox__defaultTextref'>Image Preview</span>
                                        } 
                                    </div>
                                    <input type="file"  id="refPhoto" name = "refPhoto" accept='images/*' onChange={handleChangePhoto}/>
                                </div>
                                <div className='titleModelVideo'>
                                    <h1 className='video'>Video</h1>
                                    <div className='referenceBox_Video' id = 'referenceBoxVideo' >
                                        {
                                            currStateV ? <video  className='referenceBox__VideoPhoto' poster="" src={filev} />
                                            :
                                            <span className='referenceBox__defaultTextVideo' id = 'refernceBox__defaultTextVideo'>Image Preview</span>
                                        } 
                                    </div>
                                    <input type="file" id="videoPhoto"name = "videoPhoto" accept='video/*' onChange={handleChangeVideo} /> 
                                </div>
                            </div>
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                        <Button variant="primary" onClick= {handleSaveChanges} >Save Changes</Button>
                    </Modal.Footer>
                </Modal>
        </div>
        <div className='imagebox' style={hide ? {alignItems: 'center',justifyContent:'center'} : {}}>
            {
                hide ?
                '':
                <div className='title'> 
                <h1 className='reference'>Reference Photo</h1> 
                <div className='referencebox'>
                    <img src = {filep} className='referenceBox__refPhoto' />
                </div>
                    <Button className='hide' onClick={handleHide}>Hide Reference Photo</Button> 
                </div>
            }
            
        <div className='title'>
                <h1 className='video'>Video</h1>
                <div id='videobox'>
                    {
                        image.map((index,value) => {
                            return(
                                <img id= {index} src= {`data:image/jpeg;base64,${value}` } ></img>
                            )
                        })

                    }
                </div>
                <div className='countainerRun'>
            <Button onClick= {RunProgram} variant='primary' className='run'>Run</Button>
        </div>
            </div>
            
            
        </div>
        

    </>
  )
}

export default Body;




