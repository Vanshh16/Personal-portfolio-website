import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Technology.css";
import html from "../../assets/img/tech/html.png";
import css from "../../assets/img/tech/css.png";
import javascript from "../../assets/img/tech/javascript.png";
import c from "../../assets/img/tech/c.png";
import java from "../../assets/img/tech/java.png";
import react from "../../assets/img/tech/react.png";
import github from "../../assets/img/tech/github.png";
import python from "../../assets/img/tech/python.png";
import redux from "../../assets/img/tech/redux.png";
import tailwind from "../../assets/img/tech/tailwind.png";
import vite from "../../assets/img/tech/vite.png";
import node from "../../assets/img/tech/node.png";
import TrackVisibility from "react-on-screen";

function Technology() {
  return (
    <section className="technology">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
          {({isVisible}) => 
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <div className="tech-box">
              <Row>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={html} alt="html"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={css} alt="css"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={javascript} alt="javascript"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={react} alt="react"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={redux} alt="redux"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={tailwind} alt="tailwind"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={node} alt="node"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={vite} alt="vite"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={github} alt="github"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={java} alt="java"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={c} alt="c"></img>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="img-box">
                    <img src={python} alt="python"></img>
                  </div>
                </Col>
              </Row>
            </div>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Technology;
