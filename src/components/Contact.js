import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:ajvsinfotech@gmail.com
      ?subject=${encodeURIComponent("Contact Form Submission")}
      &body=${encodeURIComponent(
        `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center">

          <Col md={8}>
            <h2 className="text-center mb-4">Contact Us</h2>

            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" className="w-100 contact-btn">
                Send Message
              </Button>
            </Form>

            {/* Contact Info */}
            <div className="text-center mt-4 contact-info">
              <p><strong>Email:</strong> ajvsinfotech@gmail.com</p>
              <p><strong>Phone:</strong> +91 9757451010</p>
              <p><strong>Location:</strong> Mumbai, Maharashtra</p>
            </div>

          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;
