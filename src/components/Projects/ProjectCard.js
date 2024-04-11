import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Project.css";
import github from "../../assets/img/gh.png";
import { FaLink, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, imgUrl, gitUrl, liveUrl, tech }) {
  return (
    <Col size={12} sm={12} lg={6}>
      <div className="proj-box tw-mx-auto">
        <Row>
          <Col xs={3}>
            <img
              className="tw-w-20 tw-h-16 md:tw-h-20"
              src={imgUrl}
              alt=""
            ></img>
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
        <div className="git-icon tw-mt-6">
          <a href={gitUrl}>
            --GitHub
            <FaLink className="link-icon tw-inline" />
          </a>
        </div>
        <div className="git-icon">
          <a href={liveUrl}>
            --Live site
            <FaExternalLinkAlt className="link-icon tw-inline" />
          </a>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
