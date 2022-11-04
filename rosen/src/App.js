import Navbar from "./components/Navbar";
import Body from "./components/Body";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";



function App() {

  useEffect(() =>{
    fetch("http://localhost:5000").then(r => console.log(r.json())).then(console.log)
  })
    return(
      <>
        <Navbar/>
        <Body />
      </>
    )
}

export default App;
