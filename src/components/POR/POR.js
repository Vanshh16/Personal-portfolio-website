import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./POR.css";
import codebase from "../../assets/img/por/codebase.png";
import moodi from "../../assets/img/por/moodi.jpg";
import htc from "../../assets/img/por/htc.jpg";
import comfest from "../../assets/img/por/comfest.jpg";
import sih from "../../assets/img/por/sih-removebg-preview.png";

function POR() {
  return (
    <section className="por" id="experience">
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Experience</h2>
              <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3">
                <div className="por-box tw-mx-auto">
                  <img src={codebase} alt=""></img>
                  <div className="por-details-box">
                    <h2>IIIT Kota CodeBase</h2>
                    <h4>Web Development Lead</h4>
                    <span>September,2023 - present</span>
                  </div>
                  <p>
                    {" "}
                    IIIT CodeBase serves as a repository for coding projects,
                    resources, and collaborative development efforts within the
                    IIIT Kota community.
                  </p>
                </div>
                <div className="por-box tw-mx-auto">
                  <img src={htc} alt=""></img>
                  <div className="por-details-box">
                    <h2>HackTheChain 2.0</h2>
                    <h4>Organizing Team</h4>
                    <span>December, 2023 - February, 2024</span>
                  </div>
                  <p>
                    {" "}
                    The HackTheChain 2.0 organizing team, experts in technology
                    and event management, orchestrates every aspect of the
                    hackathon, from securing sponsors to curating challenges,
                    ensuring a seamless experience for all participants.
                  </p>
                </div>
                <div className="por-box tw-mx-auto">
                  <img src={moodi} alt=""></img>
                  <div className="por-details-box">
                    <h2>Mood Indigo IIT-B</h2>
                    <h4>Contingent Leader</h4>
                    <span>December, 2023</span>
                  </div>
                  <p>
                    {" "}
                    The Mood Indigo Contingent Leader coordinates their college
                    group's participation, ensuring a smooth experience and
                    fostering team spirit at India's largest cultural festival.
                  </p>
                </div>
                <div className="por-box tw-mx-auto">
                  <img src={sih} alt=""></img>
                  <div className="por-details-box">
                    <h2>Smart India Hackathon</h2>
                    <h4>Team Leader</h4>
                    <span>September, 2023</span>
                  </div>
                  <p>
                    {" "}
                    The SIH Team Leader guides and motivates their team,
                    fostering collaboration and problem-solving during the
                    event. They oversee communication, task delegation, and
                    progress tracking, aiming to deliver impactful technological
                    solutions to real-world challenges.
                  </p>
                </div>
                <div className="por-box tw-mx-auto">
                  <img src={comfest} alt=""></img>
                  <div className="por-details-box">
                    <h2>Comfest 2020</h2>
                    <h4>Hackcom Team Lead</h4>
                    <span>October, 2020</span>
                  </div>
                  <p>
                    {" "}
                    HackCom, hosted by Comfest is a dynamic event that brings
                    together coding enthusiasts, innovators, and tech
                    aficionados for a thrilling hackathon experience.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default POR;
