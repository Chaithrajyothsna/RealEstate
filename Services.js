import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceType = location.hash.substring(1); // Extract service type from URL hash

  const handleContactClick = (agentName) => {
    navigate(`/contact?agent=${encodeURIComponent(agentName)}`);
  };

  const handlePropertyListingRedirect = () => {
    navigate("/propertylisting"); // Redirects to PropertyListing.js
  };

  return (
    <Container className="my-4">
      <h2 className="text-center fw-bold mb-4">Our Services</h2>

      {/* Buy Property Section */}
      {(serviceType === "buy" || !serviceType) && (
        <>
          <h3 className="text-center fw-bold mb-4">
            🏡 <span className="text-dark">Buy Property</span>
          </h3>
          <Row className="justify-content-center">
            {[
              { title: "2 BHK Flat", price: "₹1.70 Cr", size: "1568 sqft", location: "Banjara Hills, Hyderabad" },
              { title: "Land", price: "₹1.1 Cr", size: "1280 yards", location: "Hasanparthy, Warangal" },
              { title: "6 BHK Villa", price: "₹2.00 Cr", size: "1898 sqft", location: "Jubilee Hills, Hyderabad" },
            ].map((property, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card className="p-3 border rounded">
                  <Card.Body>
                    <Card.Title className="fw-bold">{property.title}</Card.Title>
                    <Card.Text>
                      <strong>{property.price}</strong> | {property.size}
                      <br />
                      {property.location}
                    </Card.Text>
                    <Button variant="primary">View More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Property Selling Section */}
      {(serviceType === "sell" || !serviceType) && (
        <>
          <h3 className="text-center fw-bold mt-5 mb-4">
            🏠 <span className="text-dark">Property Selling</span>
          </h3>
          <Row className="justify-content-center">
            {[
              { title: "List Your Property", description: "Submit your property details, upload images, and set a price.", btnText: "Get Started", btnColor: "warning" },
              { title: "Performance Tracking", description: "Track views, inquiries, and offers for your listed properties.", btnText: "Track Now", btnColor: "warning" },
            ].map((service, index) => (
              <Col md={5} key={index} className="mb-3">
                <Card className="p-3 border rounded">
                  <Card.Body>
                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button
                      variant={service.btnColor}
                      onClick={index === 0 ? handlePropertyListingRedirect : () => navigate("/dashboard")}
                    >
                      {service.btnText}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Find Agents Section */}
      {(serviceType === "agents" || !serviceType) && (
        <>
          <h3 className="text-center fw-bold mt-5 mb-4">
            💼 <span className="text-dark">Find Agents</span>
          </h3>
          <Row className="justify-content-center">
            {[
              { name: "John Doe", description: "Expert in residential properties with 10+ years of experience." },
              { name: "Jane Smith", description: "Specialist in luxury villas and commercial properties." },
              { name: "Alex Johnson", description: "Commercial property expert with a high success rate." },
            ].map((agent, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card className="p-3 border rounded">
                  <Card.Body>
                    <Card.Title className="fw-bold">{agent.name}</Card.Title>
                    <Card.Text>{agent.description}</Card.Text>
                    <Button variant="success" onClick={() => handleContactClick(agent.name)}>
                      Contact
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Services;
