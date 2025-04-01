// HomePage.js
import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import PropertyCarousel from "./PropertyCarousel";

const properties = [
  { title: "2 BHK FLAT", price: "₹1.70 Cr", size: "1568 sqft", location: "Banjara Hills, Hyderabad", img: "/images/1stImageHouse.png" },
  { title: "LAND", price: "₹1.1 Cr", size: "1280 yards", location: "Hasanparthy, Warangal", img: "/images/2ndImage1stPage.png" },
  { title: "6 BHK VILLA", price: "₹2.00 Cr", size: "1898 sqft", location: "Jubilee Hills, Hyderabad", img: "/images/3rdImage1stPage.png" },
  { title: "3 BHK APARTMENT", price: "₹1.50 Cr", size: "1400 sqft", location: "Gachibowli, Hyderabad", img: "/images/drop4.png" },
  { title: "3 BHK HOUSE", price: "₹2.50 Cr", size: "2500 sqft", location: "Shamshabad, Hyderabad", img: "/images/drop3.png" },
  { title: "3 BHK VILLA", price: "₹3.00 Cr", size: "2740 sqft", location: "Kengeri, Banglore", img: "/images/drop12.png" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const aboutUsRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToAboutUs && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="fw-bold text-danger" style={{ fontSize: "2rem", fontFamily: "serif", letterSpacing: "1px" }}>
              Find Your Perfect Heaven, With Us
            </h2>
            <Form className="d-flex mt-3">
              <Form.Control type="text" placeholder="Search here.." className="me-2 py-1" style={{ fontSize: "0.9rem" }} />
              <Button variant="outline-secondary" className="py-1 px-3">🔍 Search</Button>
            </Form>
          </Col>
        </Row>

        {/* Top Visits Section - Using PropertyCarousel Component */}
        <PropertyCarousel properties={properties} />

        {/* Our Services Section */}
        <h3 className="text-center mt-5">Our Services</h3>
        <Row className="text-center mt-3">
          {[{ title: "Buy Property", icon: "🏠", path: "/services#buy" },
            { title: "Property Selling", icon: "📈", path: "/services#sell" },
            { title: "Find Agents", icon: "🧑‍💼", path: "/services#agents" },
          ].map((service, idx) => (
            <Col md={4} key={idx}>
              <div className="p-3 border rounded shadow-sm">
                <h4>{service.icon}</h4>
                <h5>{service.title}</h5>
                <Button variant="info" onClick={() => navigate(service.path)}>Get started</Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* About Us Section */}
        <div ref={aboutUsRef} className="mt-5 p-4 bg-light rounded">
          <h4>About Us</h4>
          <p>
            We are a team of real estate and tech experts dedicated to building
            cutting-edge, user-friendly websites that connect buyers, sellers, and
            investors seamlessly. Our mission is to revolutionize the industry with
            high-performing, visually stunning, and feature-rich digital solutions.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
