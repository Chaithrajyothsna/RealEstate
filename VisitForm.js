import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaVideo, FaWalking, FaCheck, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const VisitForm = () => {
  const navigate = useNavigate();
  const [visitType, setVisitType] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    numPersons: '',
    date: '',
    timeSlot: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/visitdetails', { state: formData });
  };

  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h2 className="text-primary fw-bold">Book a Property Visit</h2>
          <p className="text-muted">Choose your preferred way to view the property</p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col md={6} className="d-flex justify-content-between">
          <Card 
            className={`visit-card text-center p-3 shadow-sm ${visitType === 'virtual' ? 'border-primary' : ''}`} 
            onClick={() => setVisitType('virtual')} 
            style={{ cursor: 'pointer', marginRight: '10px', width: '50%' }}>
            <Card.Body>
              <h5 className="text-primary"><FaVideo className="me-2" /> Virtual Tour</h5>
              <p className="text-muted">Schedule a video call with our agent.</p>
            </Card.Body>
          </Card>

          <Card 
            className={`visit-card text-center p-3 shadow-sm ${visitType === 'in-person' ? 'border-success' : ''}`} 
            onClick={() => setVisitType('in-person')} 
            style={{ cursor: 'pointer', width: '50%' }}>
            <Card.Body>
              <h5 className="text-success"><FaWalking className="me-2" /> In-Person Visit</h5>
              <p className="text-muted">Visit the property in person.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <h4 className="text-center mb-4 text-dark fw-bold">Book Your Visit</h4>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control type="text" name="fullName" placeholder="Enter your name" onChange={handleChange} required />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="tel" name="phoneNumber" placeholder="Enter your phone number" onChange={handleChange} required />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Number of Persons:</Form.Label>
                    <Form.Control type="number" name="numPersons" placeholder="Enter number of persons" onChange={handleChange} required />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="date" name="date" onChange={handleChange} required />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Time Slot:</Form.Label>
                    <Form.Select name="timeSlot" onChange={handleChange} required>
                      <option>Select a time slot</option>
                      <option>10:00 AM - 11:00 AM</option>
                      <option>11:00 AM - 12:00 PM</option>
                      <option>2:00 PM - 3:00 PM</option>
                      <option>4:00 PM - 5:00 PM</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="mb-4">
                  <Col>
                    <Form.Label>Additional Notes</Form.Label>
                    <Form.Control as="textarea" rows={4} name="additionalNotes" placeholder="Enter any additional notes" onChange={handleChange} />
                  </Col>
                </Row>

                <div className="text-center">
                  <Button variant="primary" type="submit" className="px-4">
                    <FaCalendarAlt className="me-2" /> Submit Visit Request
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VisitForm;