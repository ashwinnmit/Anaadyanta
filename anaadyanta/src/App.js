import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Events from "./Components/Events";
import Contact from "./Components/Contact";
import Sponsor from "./Components/Sponsor";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Events />
        <Contact />
        <Sponsor />
      </div>
    </BrowserRouter>
  );
}

export default App;
