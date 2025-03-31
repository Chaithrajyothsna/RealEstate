import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const HomeLoan = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanAmount: "",
    propertyValue: "",
    employmentStatus: "Employed"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Home Loan Application Submitted!\n\nName: ${formData.name}\nLoan Amount: ${formData.loanAmount}\nProperty Value: ${formData.propertyValue}`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: "500px", background: "#f8f9fa" }}>
        <h3 className="text-center fw-bold">Apply for a Home Loan</h3>
        <p className="text-center text-muted">Secure your dream home with Haven Homes</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Loan Amount (USD)</Form.Label>
            <Form.Control type="number" name="loanAmount" placeholder="Enter loan amount" value={formData.loanAmount} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Property Value (USD)</Form.Label>
            <Form.Control type="number" name="propertyValue" placeholder="Enter property value" value={formData.propertyValue} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employment Status</Form.Label>
            <Form.Select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange}>
              <option>Employed</option>
              <option>Self-Employed</option>
              <option>Unemployed</option>
              <option>Retired</option>
            </Form.Select>
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">Submit Application</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default HomeLoan;
