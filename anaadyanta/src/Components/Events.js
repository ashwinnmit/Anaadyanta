import React from "react";
import { useState } from "react";
import "../Styles/Events.css";
import Year2019 from "./Year2019";
// import TestImage from "./TestImage";
import Year2020 from "./Year2020";
import Year2021 from "./Year2021";
import Year2022 from "./Year2022";
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';




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
      <Box
      sx={{
        display: 'flex',
        marginTop:"5vh",
        marginBottom:"5vh",
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" size="small" aria-label="small button group">
      <Button key="one" size="large" onClick={() => click_2019()}>2019</Button>
  <Button  key="two" size="large" onClick={() => click_2020()}>2020</Button>
  <Button key="three" size="large" onClick={() => click_2021()}>2021</Button>
  <Button  key="three" size="large" onClick={() => click_2022()}>2022</Button>
      </ButtonGroup>
    </Box>
      {active === "Year2019" && <Year2019 />}
      {active === "Year2020" && <Year2020 />}
      {active === "Year2021" && <Year2021 />}
      {active === "Year2022" && <Year2022 />}
    </div>
  );
}

export default Events;
