import React from "react";
import "./Project.css";
import {
  Container,
  Tab,
  Col,
  Row,
} from "react-bootstrap";
import ProjectCard from "./ProjectCard.js";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import projImg1 from "../../assets/img/projects/notepad.png";
import projImg2 from "../../assets/img/projects/audi.jpg";
import projImg3 from "../../assets/img/projects/vN.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";

function Project() {
  const projects = [
    {
      title: "Keep-Notes-App",
      description: "It is a user-friendly note-taking tool, allowing effortless creation, organization, and retrieval of notes. Built with the MERN stack, it offers seamless synchronization across devices for enhanced productivity and organization.",
      imgUrl: projImg1,
      tech: {
        element1: < SiMongodb className="tech-icon mx-1" />,
        element2: < FaReact className="tech-icon mx-1" />,
        element3: < FaNodeJs className="tech-icon mx-1" />
      },
      gitUrl: "https://github.com/Vanshh16/Keep-Notes-App"
    },
    {
      title: "Auditorium Booking Portal",
      description: "Our portal simplifies event organization on campus. Users can easily check availability, submit requests, and manage reservations, streamlining administrative tasks and enhancing efficiency for college events.",
      imgUrl: projImg2,
      tech: {
        element1: < SiTailwindcss className="tech-icon mx-1" />,
        element2: < FaReact className="tech-icon mx-1" />,
        element3: < FaNodeJs className="tech-icon mx-1" />
      },
      gitUrl: "https://github.com/ikcb/AuditoriumBooking"
    },
    {
      title: "Portfolio Website",
      description: "The portfolio website offers a sleek showcase of skills and projects, providing a seamless user experience for visitors to explore achievements and contact details effortlessly.",
      imgUrl: projImg3,
      tech: {
        element1: < FaBootstrap className="tech-icon mx-1" />,
        element2: < FaReact className="tech-icon mx-1" />,
        element3: < SiCsswizardry className="tech-icon mx-1" />
      },
      gitUrl: "https://github.com/Vanshh16"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className= {isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>
                  Projects are essential for web developers as they provide hands-on learning, skill development, and tangible evidence of expertise through portfolio building. As a web developer, my projects showcase a blend of technical proficiency, creative design, and problem-solving skills. Here are descriptions of some of my notable projects
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
}

export default Project;
