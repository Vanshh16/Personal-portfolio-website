import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import "./Contact.css";
import axios from "axios";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const updateForm = (e) => {
    const value = e.target.value;
    const category = e.target.ariaLabel;
    setFormDetails({
        ...formDetails,
        [category]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");
    const response = await axios.post("http://localhost:4000/contact", formDetails);
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    console.log(response);

  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-item-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us"></img>
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                    <input type="text" value={formDetails.firstName} placeholder="First Name" aria-label="firstName" onChange={updateForm} ></input>
                </Col>
                <Col sm={6} className="px-1">
                    <input type="text" value={formDetails.lastName} placeholder="Last Name" aria-label="lastName" onChange={updateForm} ></input>
                </Col>
                <Col sm={6} className="px-1">
                    <input type="email" value={formDetails.email} placeholder="E-mail" aria-label="email" onChange={updateForm} ></input>
                </Col>
                <Col sm={6} className="px-1">
                    <input type="tel" value={formDetails.phone} placeholder="Phone no." aria-label="phone" onChange={updateForm} ></input>
                </Col>
                <Col>
                    <textarea row="6" type="text" value={formDetails.message} placeholder="Message" aria-label="message" onChange={updateForm} ></textarea>
                    <button type="submit" ><span>{buttonText}</span></button>
                </Col>
                {
                    status.message && <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
