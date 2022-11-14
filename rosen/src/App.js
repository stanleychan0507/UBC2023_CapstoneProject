import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Authentication from "./components/Authentication";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return(
      <>
        <Navbar/>
        <Body />
        <Authentication />
      </>
    )
}

export default App;
