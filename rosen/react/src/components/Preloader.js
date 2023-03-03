import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

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
    <div className="loader-container">
      <div className="spinner">Preloader</div>
    </div>
  );
}

export default Preloader;
