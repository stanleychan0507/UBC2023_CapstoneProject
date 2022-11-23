import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Body from "./components/Body";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import { useEffect } from "react";

/*
const addLoginHandler = login => {
  console.log("In App.js");
  console.log(login);
  onAddLogin={addLoginHandler}/
};
*/
function App() {
  /*
  useEffect(() =>{
    fetch("http://localhost:5000").then(r => console.log(r.json())).then(console.log)
  })*/
    return(
      <div>
        <Routes>
            <Route path="/" element={ <Body/>} />
            <Route path="/login" element={ <Login/> } />

        </Routes>
      </div>
    )
}

export default App;
