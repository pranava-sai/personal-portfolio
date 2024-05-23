import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Pranava Sai Maganti</span>,
            born and raised in <span className="purple">India</span>.
            <br />
            I am currently a junior majoring in Computer Science at Iowa State University.
            <br />
            <br />
            I am passionate about technology and dedicated to learning and growing in the field of computer science. My journey has led me to develop skills in various programming languages and tools, and I am always eager to take on new challenges.
            <br />
            <br />
            While coding is a significant part of my life, I also enjoy a variety of other activities:
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
          <p>Feel free to connect with me to discuss technology, movies, travel, or anything that sparks your interest!</p>
          <p style={{ color: "rgb(155 126 172)", marginTop: 50 }}>
          "What you need to learn isn't how to make everything easy, but what to do when something is hard"{" "}
          </p>
          <footer className="blockquote-footer">Silvia, 12th July, 2022</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
