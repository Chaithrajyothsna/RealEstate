import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: "400px", background: "#f8f9fa" }}>
        <h3 className="text-center fw-bold">Reset Your Password</h3>
        <p className="text-center text-muted">Enter your email to receive a password reset link.</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Send Reset Link
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
