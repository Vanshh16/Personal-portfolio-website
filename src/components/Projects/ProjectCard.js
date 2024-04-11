import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Project.css";
import github from "../../assets/img/gh.png";
import { FaLink } from "react-icons/fa";

function ProjectCard({ title, description, imgUrl, gitUrl, tech }) {
  return (
    <Col size={12} sm={12} lg={6}>
      {/* <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4> {title} </h4>
          <span> {description} </span>
        </div>
      </div> */}
      <div className="proj-box">
        <Row>
          <Col xs={3}>
            <img src={imgUrl} alt=""></img>
          </Col>
          <Col xs={12} md={8}>
            <h3>{title}</h3>
            <p>Tech Stack</p>
            <p>
              {tech.element1}
              {tech.element2}
              {tech.element3}
            </p>
          </Col>
        </Row>
        <Row>
          <span className="proj-des">{description}</span>
        </Row>
        <div className="git-icon">
          <a href={gitUrl}>--GitHub
            {/* <img src={github}></img> */}
            <FaLink className="link-icon"/>
          </a>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
