import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"; // FontAwesome icons

const Footer = () => {
  return (
    <footer className="bg-info text-white text-center py-4 mt-4">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Contact Details */}
          <Col md={6} className="text-md-start text-center">
            <h5 className="fw-bold">Contact Details:</h5>
            <p className="mb-1">Toll-Free: 1800 913 99896</p>
            <p className="mb-1">9:30 AM to 6:30 PM (Mon-Sun)</p>
            <p className="mb-0">Email: feedback@havenhomes.com</p>
          </Col>

          {/* Right Side: Social Media Icons */}
          <Col md={6} className="text-md-end text-center mt-3 mt-md-0">
            <h5 className="fw-bold">Connect with us:</h5>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none me-3">
              <FaFacebook size={30} color="#1877F2" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none me-3">
              <FaInstagram size={30} color="#E4405F" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none me-3">
              <FaYoutube size={30} color="#FF0000" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <FaTwitter size={30} color="#1DA1F2" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
