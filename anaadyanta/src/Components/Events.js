import React from "react";
import { useState } from "react";
import "../Styles/Events.css";
import Year2019 from "./Year2019";
import Year2020 from "./Year2020";
import Year2021 from "./Year2021";
import Year2022 from "./Year2022";

function Events() {
  const [active, setActive] = useState("Year2019");
  const click_2019 = () => {
    setActive("Year2019");
  };
  const click_2020 = () => {
    setActive("Year2020");
  };
  const click_2021 = () => {
    setActive("Year2021");
  };
  const click_2022 = () => {
    setActive("Year2022");
  };

  return (
    <div id="Events" className="Events-parent">
      <div className="title-event">previous year Events</div>
      <div className="year-event">
        <button className="button-event" onClick={() => click_2019()}>
          2019
        </button>
        <button className="button-event" onClick={() => click_2020()}>
          2020
        </button>
        <button className="button-event" onClick={() => click_2021()}>
          2021
        </button>
        <button className="button-event" onClick={() => click_2022()}>
          2022
        </button>
      </div>
      {active === "Year2019" && <Year2019 />}
      {active === "Year2020" && <Year2020 />}
      {active === "Year2021" && <Year2021 />}
      {active === "Year2022" && <Year2022 />}
    </div>
  );
}

export default Events;
