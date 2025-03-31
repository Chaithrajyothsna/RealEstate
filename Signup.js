import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    contactNo: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(`✅ Account Created Successfully!\n\nUsername: ${formData.username}\nContact No: ${formData.contactNo}`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-5 shadow rounded-3" style={{ width: "500px", background: "#f9f9f9" }}>
        <h2 className="text-center mb-4">Create an Account</h2>
        <p className="text-center text-muted">Join Haven Homes to find your perfect property</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactNo">
            <Form.Label>Contact No</Form.Label>
            <Form.Control
              type="text"
              name="contactNo"
              placeholder="Enter contact number"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Create Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">Sign Up</Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          <span className="text-muted">Already have an Account? </span>
          <Link to="/login" className="text-primary">Login</Link>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
