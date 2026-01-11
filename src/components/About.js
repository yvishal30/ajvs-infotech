import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../images/about-us.png"; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          
          {/* Left Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={aboutImg}
              alt="About AJVS Infotech"
              className="img-fluid about-image"
            />
          </Col>

          {/* Right Content */}
          <Col md={6}>
            <h2 className="about-title">
              About <span>Us</span>
            </h2>

            <p className="about-text">
              AJVS Infotech is a growing IT services and consulting company.
              We deliver reliable solutions across static and dynamic web
              development, custom tools, automation, and digital platforms.
              Our focus is on building scalable, secure, and performance-driven
              solutions that help businesses grow in the digital era.
            </p>

            {/* <Button className="about-btn" variant="outline-primary">
              Read More →
            </Button> */}
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default About;
