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

// constructor() {
//   state = {
//     loading: true
//   };
// }
// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => {
//       setState({ loading: false });
//     })
//     .catch(err => {
//       setState({ loading: false });
//     });
// }
// render() {
//   return (
//     <React.Fragment>
//       <YourApp />
//       <Lines customLoading={loading} />
//     </React.Fragment>
//   );
// }

export default Preloader;
// References : 
// https://stackabuse.com/how-to-create-a-loading-animation-in-react-from-scratch/