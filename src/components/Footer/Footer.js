import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/gh.png";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import VN from "../../assets/img/vNnobg.png";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={VN} alt="logo"></img>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/vansh-nigam-740675204/"><img src={navIcon1}></img></a>
                <a href="https://github.com/Vanshh16"><img src={navIcon2}></img></a>
                <a href="https://www.instagram.com/vanshh__16?igsh=MXdtM2JpemZza3Nkdg=="><img src={navIcon3}></img></a>
            </div>
          </Col>
        </Row>
        <p>&copy; Vansh Nigam 2024</p>
      </Container>
    </section>
  );
}

export default Footer;
