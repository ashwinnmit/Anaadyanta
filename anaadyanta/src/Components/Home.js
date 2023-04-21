import React, { Component } from "react";
import videoBg from "../Assets/videoBg.mp4";
import "../Styles/Home.css";

export class Home extends Component {
  render() {
    return (
      <div id="home">
        <video className="vid" src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1>hello</h1>
        </div>
      </div>
    );
  }
}

export default Home;
