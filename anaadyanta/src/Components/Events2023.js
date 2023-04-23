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
              <p class="copy">Check out all cultural events taking place</p>
              <button class="btn">View Events</button>
            </div>
          </div>
          <div class="card">
            <div class="content-event">
              <h2 class="title">Technical Events</h2>
              <p class="copy">Check out all Technical events taking place</p>
              <button class="btn">View Events</button>
            </div>
          </div>
          <div class="card">
            <div class="content-event">
              <h2 class="title">Sports Events</h2>
              <p class="copy">Check out all Sports events taking place</p>
              <button class="btn">View Events</button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Events2023;
