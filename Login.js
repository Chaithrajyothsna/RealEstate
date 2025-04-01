import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication (Replace with actual backend authentication)
    const loggedInUser = {
      name: formData.username,
      profilePic: "/images/John2.png", // Placeholder profile image
    };

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(loggedInUser));

    // Set user state
    setUser(loggedInUser);

    // Redirect to homepage
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: "400px", background: "#f8f9fa" }}>
        <h3 className="text-center fw-bold">Login to your Account</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
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

          <div className="d-flex justify-content-between mb-3">
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>
          </div>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>

        <div className="text-center mt-3">
          <small>
            Don't have an account? <Link to="/Signup" className="text-primary">Signup</Link>
          </small>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
