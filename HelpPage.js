import React, { useState } from "react";
import { Container, Row, Col, Card, Accordion, Form, Button, Alert } from "react-bootstrap";

const HelpPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch("http://localhost:5000/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request. Please try again.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Help & Support</h2>
      
      {/* FAQ Section */}
      <Row className="mb-4">
        <Col>
          <h4>Frequently Asked Questions</h4>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I list a property?</Accordion.Header>
              <Accordion.Body>
                To list a property, navigate to the 'Sell' section, fill in the required details, and submit your listing.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How can I contact a property owner?</Accordion.Header>
              <Accordion.Body>
                You can contact a property owner through the 'Contact Owner' button on the property listing page.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What are the payment options?</Accordion.Header>
              <Accordion.Body>
                We accept payments via credit card, PayPal, and bank transfers.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      {/* Contact Information */}
      <Row className="mb-4">
        <Col>
          <h4>Contact Us</h4>
          <Card>
            <Card.Body>
              <Card.Text>Email: support@realestateapp.com</Card.Text>
              <Card.Text>Phone: +1 234 567 890</Card.Text>
              <Card.Text>Address: 123 Real Estate St, City, Country</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Support Form */}
      <Row>
        <Col>
          <h4>Submit a Support Request</h4>
          
          {submitted && <Alert variant="success">Your request has been submitted successfully!</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" placeholder="Describe your issue" value={formData.message} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default HelpPage;
