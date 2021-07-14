import { Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPlant from "./components/NewPlant";
import About from "./components/About";
  
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/"></Route>
      <Route exact path="/home"><NewPlant /></Route>
      <Route exact path="/about"></Route>
      <Footer />
    </div>
  );
}

export default App;
