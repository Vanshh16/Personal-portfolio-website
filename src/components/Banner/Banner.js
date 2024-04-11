import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../../assets/img/header-img.svg";
import "./Banner.css";
import "animate.css";
import TrackVisibilty from "react-on-screen";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "MERN Stack Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevData) => prevData / 2);
    }

    if (!isDeleting && fullText === updatedText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibilty>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio!</span>
                  <h1>{`Hi! I am Vansh `} </h1>
                  <h2>
                    {" "}
                    <span className="wrap">{text}</span>
                  </h2>
                  <p>
                  A passionate MERN stack web developer dedicated to crafting engaging and innovative web experiences. Explore my work to discover how I blend creativity with technical expertise to bring ideas to life in the digital realm.
                  </p>
                  <button onClick={() => console.log("Connect")}>
                    <a href="#connect">Let's Connect <ArrowRightCircle size={25} /></a>
                  </button>
                </div>
              )}
            </TrackVisibilty>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
