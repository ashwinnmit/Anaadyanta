import React, { Component } from "react";
import videoBg from "../Assets/videoBg1.mp4";
import "../Styles/Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="vid" id="home">
        <video className="vid" src={videoBg} autoPlay loop muted />
        <div className="content"></div>
      </div>
    );
  }
}

export default Home;
