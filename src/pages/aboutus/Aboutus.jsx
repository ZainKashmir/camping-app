import React, { useState } from "react";
import { Component } from "react";
import howToUseApp from "./howtouse";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./aboutus.css";

export const Aboutus = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>We Professionaly deal our clients</p>
        <p>For any inquiry or information contact</p>
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <img
              src="https://i.pinimg.com/564x/47/a8/dd/47a8dd02eb7436025b8d7bc7dd44415f.jpg"
              alt="Johny"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h2>Johny Doe</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="https://i.pinimg.com/564x/0d/f4/3e/0df43e098acce8a88c3ae8a8827ffb88.jpg"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="https://i.pinimg.com/564x/ce/a3/1d/cea31dd4e5823b89e4b677caa06674e8.jpg"
              alt="Tyson"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h2>Tyson</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
