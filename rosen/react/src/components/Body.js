import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from './Navbar';
import axios from 'axios';
import Preloader from "./Preloader";
import PreloaderCut from './PreloaderCut';
import Form from 'react-bootstrap/Form';
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
    const [VideoName,setVideoName]=useState(null);
    const [FileNames,setFileNames]=useState();
    const[updateFile, setupdateFile] = useState(1);
    const [array,setArray]=useState([]);
    const [time,setTime]=useState([]);
    const [receive,setReceive]=useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(false);
    const [loadingcut, setLoadingcut] = useState(false);

    function handleChangePhoto(e) {
        console.log(e.target.files[0]);
        if(e.target.files.length!== 0){
          setFilep(URL.createObjectURL(e.target.files[0]));
          setUploadP(e.target.files[0])
          setCurrStateP(true)
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
    }

    function checkForUpdate(){
        setupdateFile(updateFile + 1)
    }

    // hide and unhide refence box
    function handleHide(){
        setHide(curr => !curr)
    }
    function handleChangeVideoName(e) {
        if(e.target.value.length>0){
            setVideoName(e.target.value); 
        }else{
            alert("FileNotCreated, No Name Inputed")
        }
          
          console.log(VideoName)
    }

    function timeSet(){
        let arr = JSON.parse(localStorage.getItem(VideoName)) || []
        setTime(arr)
    }

    //handle uploaded documents and calls backend to find similar images
    function handleSaveChanges(e){
        e.preventDefault()
        setShow(false)
        setLoadingcut(true)
        const TestData = new FormData()
        TestData.append('video',upLoadV, VideoName)
        axios.post('http://localhost:5000/app/cut/', TestData)
        .then(res => {
            console.log(res)
            let arr = res.data.timestamp
            localStorage.setItem(VideoName,JSON.stringify(arr))
            if(res.data.message == "FileExistsError"){
                alert("File name Already Exists, Couldnt not upload video")
            }else{
                setCurrStateV(false) 
                setupdateFile(updateFile + 1)
            }
            setLoadingcut(false)
        })
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
        setVideoName(null);
    }
    
    //set json to a state and change tertionary operator state
    function setValue(array){
        setArray(array);
        setReceive(true);
    }

  

    function RunProgram(e) {
        e.preventDefault()
        timeSet()
        setValue([]);
        setLoading(true);
        const data = new FormData()
        data.append('photo',uploadP)
        data.append('video',uploadP, VideoName)
        axios.post('http://localhost:5000/app/upload/', data)
        .then(res => {
            console.log(res);
            let img = res.data.img;
            let arr = Object.values(img)
            setValue(arr);
            setLoading(false);
        })
    }

   

    useEffect(() => {
        fetch('http://localhost:5000/app/folders/').then(res => res.json()).then(data => {
         console.log(data.Name);
         setFileNames(data.Name);
         console.log(FileNames)
        });
      }, [updateFile,setFileNames]);
      
  return (
    <>
        {loadingcut ? <PreloaderCut />: ""}
        <Navbar/>
        <div className="buttons">
            <Button variant="primary" onClick={handleShow} className="upload">Upload New Video</Button>
            { hide ? <Button className='unhide' onClick={handleHide}>Unhide Reference Photo</Button>: ''}
                <h6 className='title_for_video_select'>Select a video:</h6>
            <div className='SelectVideo'>
            <Form.Select className="SelectForm"onChange={handleChangeVideoName} onClick={checkForUpdate} >
                <option value={"placeholder"}>SelectVideo</option>
             {FileNames?.map((value,i) =><option key = {i} value = {value}> {value}</option>)}
            </Form.Select> 
            </div>
              
            {      //--------------Modal Page -----------------// 
            } 
                <Modal show={show} onHide={handleClose} centered fullscreen={fullscreen} className='UploadModel'>
                    <Modal.Header closeButton className='ModalHead'>
                        <Modal.Title>Upload Options</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div >
                                <div className='titleModelVideo'>
                                    <h2 className='video'>Upload Video</h2>
                                    <div className='referenceBox_Video' id = 'referenceBoxVideo' >
                                        {
                                            currStateV ? <video  className='referenceBox__VideoPhoto' poster="" src={filev} />
                                            :
                                            <span className='referenceBox__defaultTextVideo' id = 'refernceBox__defaultTextVideo'>Image Preview</span>
                                        } 
                                    </div>
                                    <Form.Control  type="file" id="videoPhoto"name = "videoPhoto" accept='video/*' onChange={handleChangeVideo} /> 
                                    <div> 
                                        <Form.Control type ="text" id = "videoName" placeholder="NameForVideo" onChange={handleChangeVideoName} name = "VideoName"/>
                                    </div>
                                </div>
                            </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                        <Button variant="primary"  onClick= {handleSaveChanges} >Save Video</Button>
                    </Modal.Footer>
                </Modal>
        </div>
        <div className='imagebox' style={hide ? {alignItems: 'center',justifyContent:'center'} : {}}>
            {
                hide ?
                '':
                <div className='title'> 
                <h1 className='reference'>Reference Photo</h1> 
                <div className='referencebox' >
                    <div className='referenceBox_Photo'>
                    {
                        currStateP ? <img src={filep} alt='Refernece Photo' className='referenceBox__refPhoto' /> 
                        :
                        <span className='referenceBox__defaultTextVideo' id = 'refernceBox__defaultTextVideo'>Image Preview</span>
                    } 
                    </div>
                </div>
                    <Form.Control  type="file"  id="refPhoto" name = "refPhoto" accept='images/*' onChange={handleChangePhoto}/>
                    <Button className='hide' onClick={handleHide}>Hide Reference Photo</Button> 
                </div>
            }
        <div className='title'>
                <h1 className='video'>Similar Images</h1>
                <div id='videobox'>
                    {loading ? <Preloader /> : ""}
                    {receive? array.map((value,i) =>{return(<div key= {i}><img className='test' alt='no image shown' src= {`data:image/jpeg;base64,${value}`}/></div>)}):''}
                </div>
                <div className='countainerRun'>
            <Button disabled={!((filep&&FileNames.length!=0 && VideoName != null && VideoName != "placeholder" && loading == false))} onClick= {RunProgram} variant='primary' className='run'>Run</Button>
        </div>
            </div>
        </div>



    </>
  )
}

export default Body;




