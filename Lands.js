import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Image, Carousel } from "react-bootstrap";
import { FaBed, FaBath, FaCouch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Lands = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state;
  const images = [
    "/images/2ndImage1stPage.png",
    "/images/2ndImage2ndImage.png",
    "/images/land1.jpg",
    "/images/drop8.png",
    "/images/land2.jpg"
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
      }, 8000); // 8 seconds per slide
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

  const handleEMIClick = () => {
    navigate("/emicalculator");
  };

  const handleBookVisitClick = () => {
    navigate("/visitform");
  };

  const handleGetCallClick = () => {
    navigate("/calldetails", { 
      state: { 
        callerName: "Alex", 
        callDate: "2025-04-05", 
        callTime: "2:00 PM", 
        confirmed: true 
      } 
    });
  };

  return (
    <Container className="my-4" onKeyDown={handleKeyDown} tabIndex={0}>
      <Row>
        <Col md={8}>
          <h4 className="fw-bold">₹1.10 Cr</h4>
          <p><a href="#" className="text-primary">EMI - ₹25,000</a> | <a href="#" className="text-primary">Loan Available</a></p>
          <p><a href="#" className="text-primary">1280 Sq-ft</a></p>
          <p><a href="#" className="text-primary">Sale in Hasanparthy, Warangal</a></p>
          
          {/* Slideshow for Images */}
          <Carousel activeIndex={index} onSelect={handleSelect} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <Image src={img} fluid style={{ width: "70%", height: "370px", objectFit: "cover" }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        
        <Col md={4} className="d-flex align-items-center justify-content-center">
          <Card className="text-center p-3" style={{ backgroundColor: "#d3d3d3", width: "80%" }}>
            <h5 className="fw-bold">Highlights :</h5>
            <p>East Facing</p>
            <p>Overlooking Park/Garden</p>
            <p>Overlooking Main Road</p>
            <p>Rain Water Harvesting</p>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-4 text-center">
        <Col><Button variant="danger" className="px-4" onClick={handleBookVisitClick}>Book A Visit</Button></Col>
        <Col><Button variant="danger" className="px-4" onClick={handleEMIClick}>EMI</Button></Col>
        <Col><Button variant="danger" className="px-4" onClick={handleGetCallClick}>Get A Call</Button></Col>
      </Row>
    </Container>
  );
};

export default Lands;
