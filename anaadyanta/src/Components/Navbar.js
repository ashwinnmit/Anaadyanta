import React, { Component } from "react";
import "../Styles/Navbar.css";
import { useState } from "react";
import img from "../Assets/NavbarLogo-Anaadyanta.svg";

function Navbar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <nav
      class="navbar sticky-top navbar-expand-lg bg-body-tertiary"
      id={color ? "bg-color" : "bg"}
    >
      <div class="sticky">
        <div class="nav1">
          <div>
            <img style={{ width: "200px" }} src={img} />
          </div>
          <input type="checkbox" id="click" />
          <label for="click" class="menu-btn">
            <i class="fas fa-bars"></i>
          </label>

          <ul class="ul">
            <li class="li">
              <a href="#Home">Home</a>
            </li>
            <li class="li">
              <a href="#About">About</a>
            </li>
            <li class="li">
              <a href="#Events">Events</a>
            </li>
            <li class="li">
              <a href="#Proshow">Proshow</a>
            </li>
            <li class="li">
              <a href="#Sponsor">Sponsors</a>
            </li>
            <li class="li">
              <a href="#Contact">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
