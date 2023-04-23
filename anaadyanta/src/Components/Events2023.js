import React, { Component } from "react";
import "../Styles/Events2023.css";

export class Events2023 extends Component {
  render() {
    return (
      <div id="Events" className="past-events-container">
        <div className="title-event">2023 Events</div>
        <main class="page-content">
          <div class="card">
            <div class="content-event">
              <h2 class="title">Cultural Events</h2>
              <p class="copy">
                Cultural events are where we get to party and celebrate our
                diversity, traditions, arts, and customs! Let's come together,
                have fun, and learn about different cultures!
              </p>
              <button class="btn">View Events</button>
            </div>
          </div>
          <div class="card">
            <div class="content-event">
              <h2 class="title">Technical Events</h2>
              <p class="copy">
                Tech events are where we geek out, explore new innovations,
                share ideas, and connect with fellow techies! Let's learn,
                network, and innovate together
              </p>
              <button class="btn">View Events</button>
            </div>
          </div>
          {/* <div class="card"> 
            <div class="content-event">
              <h2 class="title">Sports Events</h2>
              <p class="copy">Check out all Sports events taking place</p>
              <button class="btn">View Events</button>
            </div>
    </div>*/}
        </main>
      </div>
    );
  }
}

export default Events2023;
