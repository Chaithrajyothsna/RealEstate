// Signup.js
import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(""); // To store error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate a successful signup (you should integrate a backend API here)
    const newUser = {
      name: formData.name,
      email: formData.email,
      profilePic: "/images/user.png", // Placeholder profile image
    };

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(newUser));

    // Set user state to reflect the logged-in user
    setUser(newUser);

    // Navigate to homepage after successful signup
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: "400px", background: "#f8f9fa" }}>
        <h3 className="text-center fw-bold">Create Your Account</h3>

        {/* Display error message if any */}
        {error && <div className="alert alert-danger">{error}</div>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Signup
          </Button>
        </Form>

        <div className="text-center mt-3">
          <small>
            Already have an account? <Link to="/login" className="text-primary">Login</Link>
          </small>
        </div>
      </Card>
    </Container>
  );
};

export default Signup;
