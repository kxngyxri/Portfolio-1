import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A SHORT <span className="purple"> INTRODUCTION </span> ABOUT MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about tech and I spend majority of my time
              nerding out on tech  and building cool tech stuff using my 
              skills.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> CSS, Javascript, HTML and Java. </b>
              </i>
              <br />
              <br />
              My field of interest is building new and useful &nbsp;
              <i>
                <b className="purple">web technologies and products </b> and
                also in areas related to{" "}
                <b className="purple">
                  emerging technologies.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also play around
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME</h1>
            <p>
              Feel free to <span className="purple">connect with me </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kxngyxri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/KeithCrypto8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/theuriwankio/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
