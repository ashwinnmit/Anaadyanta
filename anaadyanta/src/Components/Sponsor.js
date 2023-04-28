import React from "react";
import "../Styles/Sponsor.css";
import pdf from "../Assets/Anaadyanta2023_SB-1.pdf";
// import sponsor from "../Assets/SponsorPic-removebg-preview.png";
import sponsor from "../Assets/Collab-PhotoRoom.png-PhotoRoom.png";

// import sponsor from "../Assets/Collab.png";

function Sponsor() {
  return (
    <div className="spon-container" id="Sponsor">
      <h1 className="sponsor-title">Sponsors</h1>
      <div className="sponsor-div">
        <div>
          <img
            src={sponsor}
            alt="Sponsor Placeholder"
            className="sponsor-pic"
          />
          <h4 className="reveal">
            For Sponsorships and Partnerships, please refer:
          </h4>
        </div>
        <div>
          <a
            href={pdf}
            download="Anaadyanta2023-sponsor-brochure"
            target="_blank"
          >
            <button type="button" class="btn btn-outline-dark">
              Download Brochure
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
