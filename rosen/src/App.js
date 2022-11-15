import Navbar from "./components/Navbar";
import Body from "./components/Body";

import 'bootstrap/dist/css/bootstrap.min.css';

const addLoginHandler = login => {
  console.log("In App.js");
  console.log(login);
};

function App() {
    return(
      <>
        <Navbar onAddLogin={addLoginHandler}/>
        <Body />

      </>
    )
}

export default App;
