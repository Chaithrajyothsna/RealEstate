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
    setError(null); // Clear error on change
  };

  const validateInputs = () => {
    const { username, contactNo, password, confirmPassword } = formData;

    if (username.trim().length < 3) {
      return "Username must be at least 3 characters long.";
    }

    if (!/^\d{10,}$/.test(contactNo)) {
      return "Contact number must be at least 10 digits and numeric.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Account Created Successfully!");
        navigate("/login"); // Redirect to login page
      } else {
        setError(data.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Something went wrong. Please try again.");
    }
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
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
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
