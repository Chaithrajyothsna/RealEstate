import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const CallDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { callerName, callDate, callTime, confirmed } = location.state || {};

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg text-center">
        <h2>Call Details</h2>
        <p><strong>Caller:</strong> {callerName || "Not Available"}</p>
        <p><strong>Date:</strong> {callDate || "Not Available"}</p>
        <p><strong>Time:</strong> {callTime || "Not Available"}</p>
        <p><strong>Call Confirmed:</strong> {confirmed ? "Yes" : "No"}</p>
        <Button variant="primary" onClick={() => navigate("/")}>Go Back</Button>
      </Card>
    </Container>
  );
};

export default CallDetails;
