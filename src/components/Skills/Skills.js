import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2> Skills</h2>
              <p>
                Proficient web development skills are essential for delivering
                top-notch websites and applications, ensuring client
                satisfaction and staying ahead in a rapidly evolving digital
                landscape.
              </p>
              <Carousel
                className="skill-slider"
                responsive={responsive}
                infinite={true}
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Version Control</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>API Integration</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Database Management</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>State Management</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
}

export default Skills;
