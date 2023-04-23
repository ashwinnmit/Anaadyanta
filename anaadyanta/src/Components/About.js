import React, { Component } from "react";
import "../Styles/About.css";

export class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div id="About" className="container">
          <h2 className="about-heding">About</h2>

          <div>
            <p className="about-content">
              Anaadyanta dates way back to 2004 when it first made a debut. This
              techno-cultural fest not only hosts students from various colleges
              and universities to showcase their talents and ideas, but it also
              connects students from the same and different colleges alike. It
              helps gather fresh memories, celebrate traditions and dare we say,
              life itself.
              <br />
              <br />
              NMIT Bangalore invites you to take a break from the sweltering sun
              and join us on a journey through the vibrant world of art, music,
              and drama. Cradle of Culture is a celebration of our heritage and
              a tribute to the human spirit that drives us to create, to
              express, and to connect with others through our culture. So come
              and join us on this journey of discovery, as we celebrate the
              beauty of our cultural diversity. Let us showcase the richness
              that is India
              <br />
              <br />
              With "Cradle of Culture", we shall celebrate the various, dynamic,
              and distinctive cultures of India. From a very young age, we have
              imbibed the essence of unity in diversity, recognizing the immense
              value it brings and now we are gathering to celebrate it.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
