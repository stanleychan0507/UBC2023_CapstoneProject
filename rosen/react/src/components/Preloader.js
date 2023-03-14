import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Modal from 'react-bootstrap/Modal';
import '../CSS/Preloader.css';

function Preloader() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
      <div className="container">
        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="main-content">
          </div>
        )}
      </div>
    );
}


export default Preloader;
// References : 
// https://stackabuse.com/how-to-create-a-loading-animation-in-react-from-scratch/