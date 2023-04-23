import React, { Component } from "react";
import "../Styles/Proshow.css";
import proshow from "../Assets/PrevProShow.png";

function Proshow() {
  return (
    <>
      <h1 className="contact">Proshow</h1>
      <div class="content-p">
        <div class="article-p">
          <div class="image-p">
            <img src={proshow} className="proshow-image" />
          </div>
          <div class="text-p">
            <div class="title-p">Revealing soon!!!!</div>
            {/* <div class="excerpt-p">As we rapidly approach Valentine’s Day, this time of year can feel especially lonely for those who are single.</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Proshow;
