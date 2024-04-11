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
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <div className="tech-box tw-grid tw-grid-cols-2 md:tw-grid-cols-3">
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={html} alt="html"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={css} alt="css"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={javascript} alt="javascript"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={react} alt="react"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={redux} alt="redux"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={tailwind} alt="tailwind"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={node} alt="node"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={vite} alt="vite"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={github} alt="github"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={java} alt="java"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={c} alt="c"></img>
                    </div>
                    <div className="img-box tw-mx-auto tw-my-5 tw-flex tw-justify-center">
                      <img src={python} alt="python"></img>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Technology;
