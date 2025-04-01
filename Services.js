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

  // Handle the "View More" click event to navigate to the respective page
  const handleViewMoreClick = (propertyType) => {
    if (propertyType === "Land") {
      navigate("/Lands");  // Navigate to the Land details page
    } else if (propertyType === "villa") {
      navigate("/Villa");  // Navigate to the Villa details page
    } else if (propertyType === "apartment") {
      navigate("/Apartment");  // Navigate to the Flat details page
    }
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
            {[{
              title: "2 BHK Flat",
              price: "₹1.70 Cr",
              size: "1568 sqft",
              location: "Banjara Hills, Hyderabad",
              type: "apartment",  // Add property type for easy reference
            },
            {
              title: "Land",
              price: "₹1.1 Cr",
              size: "1280 yards",
              location: "Hasanparthy, Warangal",
              type: "Land",  // Add property type for easy reference
            },
            {
              title: "6 BHK Villa",
              price: "₹2.00 Cr",
              size: "1898 sqft",
              location: "Jubilee Hills, Hyderabad",
              type: "villa",  // Add property type for easy reference
            }].map((property, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card className="p-3 border rounded">
                  <Card.Body>
                    <Card.Title className="fw-bold">{property.title}</Card.Title>
                    <Card.Text>
                      <strong>{property.price}</strong> | {property.size}
                      <br />
                      {property.location}
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleViewMoreClick(property.type)} // Navigate based on property type
                    >
                      View More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Other Sections (Property Selling, Find Agents, etc.) */}

    </Container>
  );
};

export default Services;
