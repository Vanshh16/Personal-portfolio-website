import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Education.css";
import iiitKota from "../../assets/img/iiit-kota.png";
import sfc from "../../assets/img/sfc-removebg-preview.png";
import TrackVisibility from "react-on-screen";
import "animate.css";



function Education() {
  return (
    <section className="education">
      <h2>Education</h2>

      <Container> 
        <Row>
          <Col>
          <TrackVisibility>
          {({isVisible}) => 
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <div className="ed-box">
            <Row>
              <Col size={12} sm={12} md={6}>
                <div className="ed-details-box">
                <img className="img1" src={iiitKota} alt="IIIT Kota"></img>
                  <h4>Indian Institute of Information Technology, Kota</h4>
                  <p>Bachelor of Technology</p>
                  <p>November, 2022 - June, 2026</p>
                  <p>Electronics and Communication Engineering</p>
                </div>
              </Col>
              <Col size={12} sm={12} md={6} >
                <div className="ed-details-box">
                <img className="img2" src={sfc} alt="IIIT Kota"></img>
                  <h4>St. Fidelis College, Lucknow</h4>
                  <p>10+2</p>
                  <p>April, 2006 - June, 2021</p>
                  <p>Physics, Chemistry, Maths, English and Computers</p>
                </div>
              </Col>
              </Row>
            </div></div>}</TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Education;
