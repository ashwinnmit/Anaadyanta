import React, { Component } from "react";
import videoBg from "../Assets/videoBg1.mp4";
import Svg from "./Svg";
import "../Styles/Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="vid" id="Home">
        <video className="vid" src={videoBg} autoPlay loop muted />
        <div className="content">
          <Svg />
          <h4>An Annual National Level Techno-Cultural Event</h4>
        </div>
      </div>
    );
  }
}

export default Home;
