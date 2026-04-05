import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avtar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m currenlty a
              <i>
                <b className="purple">
                  {" "}printer technician{" "}
                </b>
              </i>
               where I repair, maintain install printers (from industrial to office) for various private, public and governemnt clients around the wide-bay! I have a strong background in 
              <i>
                <b className="purple">
                  {" "}
                  ICT
                </b>
              </i>
                  , and decided to make this page to sort of document some of my projects, idea's and just experiment with HTML, JS, React and etc.
              <br />
              <br />
              
              I'm practicing some electronic and automotive projects, my most recent projects being 
              <i>
                <b className="purple">
                  {" "} DIY underglow, LED Headlights and taillights on the falcon
                  {" "}
                </b>
              </i>
              — and I'm always looking at improving my homelab, learning more about blockchain and cars!
              <br />
              <br />
              If you've got idea's, suggestions or even want advice, my socials are linked
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
