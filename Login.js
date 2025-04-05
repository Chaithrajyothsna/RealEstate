import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { username, password } = formData;

    if (username.length < 3) {
      alert("❌ Username must be at least 3 characters long.");
      return false;
    }

    if (password.length < 6) {
      alert("❌ Password must be at least 6 characters long.");
      return false;
    }

    return true;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;

  //   const loggedInUser = {
  //     name: formData.username,
  //     profilePic: "/images/user.png",
  //   };

  //   localStorage.setItem("user", JSON.stringify(loggedInUser));
  //   setUser(loggedInUser);
  //   navigate("/");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        alert(`❌ ${data.message}`);
        return;
      }
  
      const loggedInUser = {
        name: data.username,
        profilePic: "/images/user.png" // Optional
      };
  
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      alert("✅ Login successful!");
      navigate("/");
    } catch (err) {
      alert("❌ Server error. Please try again later.");
    }
  };  

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: "400px", background: "#f8f9fa" }}>
        <h3 className="text-center fw-bold mb-3">Login to your Account</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
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
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-between mb-3">
            <Link to="/ForgotPassword" className="text-primary" style={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </div>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>

        <div className="text-center mt-3">
          <small>
            Don't have an account?{" "}
            <Link to="/Signup" className="text-primary">
              Signup
            </Link>
          </small>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
