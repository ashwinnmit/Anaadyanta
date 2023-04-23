import React , {useEffect}from "react";
import "../Styles/Sponsor.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import sponsor from "../Assets/SponsorPic-removebg-preview.png";
import sponsor from "../Assets/Collab-PhotoRoom.png-PhotoRoom.png";

// import sponsor from "../Assets/Collab.png";

function Sponsor() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="spon-container" id="Sponsor">
      <h1 className="sponsor-title">Sponsors</h1>
      <div className="sponsor-div">
        <img src={sponsor} alt="Sponsor Placeholder" className="sponsor-pic" data-aos="zoom-out-right"/>
        <h4 className="reveal" data-aos="zoom-out-left">Revealing Soon!!!</h4>
      </div>
    </div>
  );
}

export default Sponsor;
