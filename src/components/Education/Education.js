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
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <div className="ed-box tw-grid tw-grid-cols-1 md:tw-grid-cols-2">
                    <div className="ed-details-box tw-mx-auto tw-py-12 md:tw-px-24">
                      <div className="tw-flex tw-justify-center">
                        <img
                          className="img1 tw-h-40 tw-w-40"
                          src={iiitKota}
                          alt="IIIT Kota"
                        ></img>
                      </div>
                      <div className="tw-text-center tw-space-y-6">
                      <h4>Indian Institute of Information Technology, Kota</h4>
                      <p>Bachelor of Technology</p>
                      <p>November, 2022 - June, 2026</p>
                      <p>Electronics and Communication Engineering</p>
                      </div>
                    </div>
                    <div className="ed-details-box tw-py-12 md:tw-px-24">
                      <div className="tw-flex tw-justify-center">
                        <img className="img2 tw-h-44 tw-w-48" src={sfc} alt="St. Fidelis College"></img>
                      </div>
                      <div className="tw-space-y-6">
                      <h4>St. Fidelis College, Lucknow</h4>
                      <p className="tw-pt-4">10+2</p>
                      <p>April, 2006 - June, 2021</p>
                      <p>Physics, Chemistry, Maths, English and Computers</p>
                      </div>
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

export default Education;
