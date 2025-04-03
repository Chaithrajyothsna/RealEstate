import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    contactNo: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username (at least 3 characters)
    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    // Validate contact number (only numbers, at least 10 digits)
    if (!/^\d{10,}$/.test(formData.contactNo)) {
      setError("Contact number must be at least 10 digits and contain only numbers.");
      return;
    }

    // Validate password (at least 6 characters)
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Validate confirm password matches password
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // If all validations pass
    setError(null);
    alert(`✅ Account Created Successfully!\n\nUsername: ${formData.username}\nContact No: ${formData.contactNo}`);

    // Save user data (for demonstration purposes, store in localStorage)
    const newUser = {
      username: formData.username,
      contactNo: formData.contactNo,
      profilePic: "/images/user.png" // Placeholder image
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    // Redirect to login page
    navigate("/login");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-5 shadow rounded-3" style={{ width: "500px", background: "#f9f9f9" }}>
        <h2 className="text-center mb-4">Create an Account</h2>
        <p className="text-center text-muted">Join Haven Homes to find your perfect property</p>

        {error && <Alert variant="danger">{error}</Alert>}

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
          <span className="text-muted">Already have an account? </span>
          <Link to="/login" className="text-primary">Login</Link>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
