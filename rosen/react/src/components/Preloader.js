import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import '../CSS/Preloader.css';

function Preloader() {
  // const [data, setData] = useState([]);
  // const [done, setDone] = useState(undefined);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //       setDone(true);
  //     });
  // }, []);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
