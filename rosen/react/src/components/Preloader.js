import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

function Preloader() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setDone(true);
      });
  }, []);

  return (
    <div>
      <ReactLoading type={"bar"} color={"green"} height={667} width={375} />
    </div>
  );
}

export default Preloader;
