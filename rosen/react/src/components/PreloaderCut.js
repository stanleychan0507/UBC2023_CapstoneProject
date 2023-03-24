import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Modal from 'react-bootstrap/Modal';
import '../CSS/Preloader.css';

function PreloaderCut() {
    const [loadingcut, setLoadingcut] = useState(false);
    
    useEffect(() => {
      setLoadingcut(true);
    }, []);
  
    return (
        <div className="container-cut">
          {loadingcut ? (
            <div className="loader-container-cut">
                <div className="spinner-cut"></div> 
                <div className="Text"> Cutting Up video Into Images Might Take a While ... </div>
              
            </div>
          ) : (
            <div className="main-content-cut">
            </div>
          )}
        </div>
      );
  }

  export default PreloaderCut;