import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Image, Carousel } from "react-bootstrap";
import { FaBed, FaBath, FaCouch } from "react-icons/fa";

const SecondPage = () => {
  const images = [
    "/images/3rdImage1stPage.png",
    "/images/vliving.jpg",
    "/images/villaKitchen.jpg",
    "/images/villaDining.jpg",
    "/images/vbed1.jpg",
    "/images/vbed2.jpg",
    "/images/vbed3.jpg",
    "/images/vwash.jpg"
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000); // 6 seconds per slide
      return () => clearInterval(interval);
    }
  }, [paused]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (event.key === "ArrowLeft") {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <Container className="my-4" onKeyDown={handleKeyDown} tabIndex={0}>
      <Row>
        <Col md={8}>
          <h4 className="fw-bold">₹2.00 Cr</h4>
          <p>EMI - ₹75,000 | Home Loan Available</p>
          <p>1988 Sq-ft 6 BHK Villa For Sale in Jubliee Hills, Hyderabad</p>
          
          {/* Slideshow for Images */}
          <Carousel activeIndex={index} onSelect={handleSelect} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <Image src={img} fluid style={{ width: "80%", height: "350px", objectFit: "cover" }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        
        <Col md={4} className="d-flex align-items-center">
          <Card className="text-center p-3" style={{ backgroundColor: "#d3d3d3", width: "100%" }}>
            <p><FaBed /> <strong>6 Beds</strong></p>
            <p><FaBath /> <strong>6 Baths</strong></p>
            <p><FaCouch /> <strong>Furnished</strong></p>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-4 p-3 rounded" style={{ backgroundColor: "#d1ecf1" }}>
        <Col md={4}><p><strong>Super Built-up Area</strong></p><p>1586 sqft</p><p>₹9,200/sqft</p></Col>
        <Col md={4}><p><strong>Floor</strong></p><p>3 (Out of 5 Floors)</p></Col>
        <Col md={4}><p><strong>Transaction type</strong></p><p>sale</p></Col>
        <Col md={4}><p><strong>Status</strong></p><p>Ready to Move</p></Col>
        <Col md={4}><p><strong>Furnished Status</strong></p><p>Furnished</p></Col>
      </Row>
      
      <Row className="mt-4 text-center">
        <Col><Button variant="danger" className="px-4">Book A Visit</Button></Col>
        <Col><Button variant="danger" className="px-4">EMI</Button></Col>
        <Col><Button variant="danger" className="px-4">Get A Call</Button></Col>
      </Row>
    </Container>
  );
};

export default SecondPage;
