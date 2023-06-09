import Login from "./components/Login";
import Body from "./components/Body";
import Preloader from "./components/Preloader";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"

function App() {
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
