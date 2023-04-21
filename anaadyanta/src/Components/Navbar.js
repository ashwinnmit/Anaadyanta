import React, { Component } from "react";
import "../Styles/Navbar.css";
import { useState } from "react";

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
      <div class="container-fluid">
        <a href="#Home">
          <img
            className="navbar-brand"
            src={require("../Assets/AnaadyantaLogoBlack.png")}
          ></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#About">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Sponsor">
                Sponsors
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Events">
                Events
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Proshow">
                Proshow
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a class="navbar-brand" href="https://www.ecellnmit.in">
        <img src="" />
      </a>
    </nav>
  );
}

export default Navbar;
