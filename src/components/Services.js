import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import staticWebsiteImg from "../images/static-website.png";
import dynamicWebsiteImg from "../images/dynamic-website.png";
import toolsImg from "../images/tools.png";
import customizeImg from "../images/customize.png";

const services = [
  {
    title: "Static Website",
    desc: "Fast, SEO-friendly and responsive static websites.",
    img: staticWebsiteImg
  },
  {
    title: "Dynamic Website",
    desc: "Modern React & API-driven dynamic web applications.",
    img: dynamicWebsiteImg
  },
  {
    title: "Basic Tools",
    desc: "Automation tools and simple dashboards for business.",
    img: toolsImg
  },
  {
    title: "Customised Tools",
    desc: "Fully customized tools as per business requirements.",
    img: customizeImg
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="custom-card h-100">
                <Card.Img variant="top" src={service.img} alt={service.title} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
