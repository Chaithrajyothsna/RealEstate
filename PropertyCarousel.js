import { useNavigate } from "react-router-dom";
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";

function PropertyCarousel({ properties }) {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <>
      <h3 className="mt-5">Top Visits...</h3>
      <Carousel indicators={false} controls={true} interval={3000} pause={false}>
        {[0, 1].map((slide) => (
          <Carousel.Item key={slide}>
            <Row className="justify-content-center">
              {properties.slice(slide * 3, slide * 3 + 3).map((property, idx) => (
                <Col md={4} key={idx} className="d-flex justify-content-center">
                  <Card className="shadow position-relative" style={{ width: "18rem", height: "100%" }}>
                    <span 
                      className="position-absolute top-0 start-0 px-2 py-1 text-white fw-bold"
                      style={{ backgroundColor: "#dc3545", borderRadius: "0 5px 5px 0", fontSize: "0.8rem" }}
                    >
                      Best Seller
                    </span>
                    <Card.Img variant="top" src={property.img} alt={property.title} style={{ height: "180px", objectFit: "cover" }} />
                    <Card.Body className="d-flex flex-column text-center">
                      <Card.Title>{property.title}</Card.Title>
                      <Card.Text>
                        <strong>{property.price}</strong> | {property.size}
                        <br />
                        {property.location}
                      </Card.Text>
                      {/* View More Button with Navigation */}
                      <Button 
                        variant="danger" 
                        className="mt-auto"
                        onClick={() => navigate("/secondpage", { state: { property } })} // Pass property details
                      >
                        View More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default PropertyCarousel;
