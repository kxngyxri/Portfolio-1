import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Theuri Keith Wankio </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br /> I am a final year student pursuing a BSc
            in Applied Computer Technology with a concentration in Distributed Systems and 
            Mobile Computing at United States International University.
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating Designs on Canva
            </li>
            <li className="about-activity">
              <ImPointRight /> Tinkering on Figma
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life was boring when Apple and Blackberry were just fruits."{" "}
          </p>
          <footer className="blockquote-footer">Theuri Keith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
