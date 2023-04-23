import React, { Component } from "react";
import videoBg from "../Assets/videobg2(15sec).mp4";
import Logo from "./Logo";
import Aylogo from "./Aylogo";
import Desclogo from "./Desclogo";
import Date from "./Date";
import "../Styles/Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="vid" id="Home">
        {/* <div className="overlay"></div> */}
        <video className="vid" src={videoBg} autoPlay loop muted />
        <div className="content">
          <Logo />
          <Aylogo />
          <Desclogo />
          <h4>An Annual National Level Techno-Cultural Event</h4>
          <Date />
        </div>
      </div>
    );
  }
}

export default Home;
