import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Teejay</span>{" "}
            from <span className="purple">not India</span>.
            <br />
            I’m still editing and adjusting these pages, so ignore stuff that doesn't make sense!{" "}
            <span className="purple">s</span> s{" "}
            <span className="purple">s</span>.
            <br />s{" "}
            <span className="purple">s</span> s{" "}
            <span className="purple">s</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You consist of body, breath, and mind. The former only as far as they are in your care, while the mind is the only thing that you truly own."{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
