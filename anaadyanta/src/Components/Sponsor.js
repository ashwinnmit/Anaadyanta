import React from "react";
import "../Styles/Sponsor.css";
// import sponsor from "../Assets/SponsorPic-removebg-preview.png";
import sponsor from "../Assets/Collab-PhotoRoom.png-PhotoRoom.png";

// import sponsor from "../Assets/Collab.png";

function Sponsor() {
  return (
    <div className="spon-container" id="Sponsor">
      <h1 className="sponsor-title">Sponsors</h1>
      <div className="sponsor-div">
        <img src={sponsor} alt="Sponsor Placeholder" className="sponsor-pic" />
        <h4 className="reveal">Revealing Soon!!!</h4>
      </div>
    </div>
  );
}

export default Sponsor;
