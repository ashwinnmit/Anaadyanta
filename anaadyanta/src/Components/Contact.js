import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import nmitlogo from "../Assets/NMITHeader.png";
import aylogo from "../Assets/FooterLogo-Anaadyanta.svg";
import "../Styles/Contact.css";
function Contact() {
  return (
    <div class="custom-shape-divider-top-1682310317">
    <div class="footer-basic" id="Contact">
      <footer>
        <h1 class="contact">Contact Us</h1>
        <div class="logos">
          <div class="nmitlogo">
            <a href="https://www.nmit.ac.in/" target="_blank">
              <img src={nmitlogo} alt="" class="nitte-logo" />
            </a>
          </div>
          <img src={aylogo} alt="" class="ay-logo" />
        </div>
        <p class="text-contact">Follow Us On</p>
        <div class="social">
          <a href="https://www.instagram.com/anaadyanta/" target="_blank">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
        </div>
        <p class="text-contact">For more exciting updates!!</p>
        <p class="code">
          <a href="" class="conduct" target="_blank">
            Code of Conduct
          </a>
          <a> | </a>
          <a href="mailto: " class="conduct">
            anaadyanta@nmit.ac.in{" "}
          </a>
        </p>
        <p class="end">Made with ❤️ by NMIT</p>
      </footer>
    </div>
    </div>
  );
}

export default Contact;
