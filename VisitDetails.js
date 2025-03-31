

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const VisitDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state;

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2>Visit Details</h2>
          <p className="text-muted">Here are the details of your visit request.</p>
        </Col>
      </Row>

      <Card className="p-4">
        <Card.Body>
          <h4 className="mb-3">Booking Information</h4>
          <p><strong>Full Name:</strong> {details?.fullName}</p>
          <p><strong>Email:</strong> {details?.email}</p>
          <p><strong>Phone Number:</strong> {details?.phoneNumber}</p>
          <p><strong>Number of Persons:</strong> {details?.numPersons}</p>
          <p><strong>Visit Date:</strong> {details?.date}</p>
          <p><strong>Time Slot:</strong> {details?.timeSlot}</p>
          <p><strong>Additional Notes:</strong> {details?.additionalNotes}</p>

          <div className="mt-4">
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              <FaArrowLeft className="me-2" /> Go Back
            </button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VisitDetails;
