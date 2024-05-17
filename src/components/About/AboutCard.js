import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranava Sai Maganti </span>
            born and raised in <span className="purple"> India.</span>
            <br />
            I am a junior majoring in Computer Science at Iowa State University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Electronic Devices
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "What you need to learn isn't how to make everything easy, but what to do when something is hard"{" "}
          </p>
          <footer className="blockquote-footer">Silvia, 12th July, 2022</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
