import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Navbar, Nav, Image } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenues",
        data: [150, 120, 180, 90, 60, 40, 70, 100, 130, 160, 180, 200],
        backgroundColor: "#7D7DFE",
      },
    ],
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-info text-white p-3 vh-100" style={{ width: "250px" }}>
        <h4>HAVEN HOMES</h4>
        <Nav className="flex-column">
          <Nav.Link className="text-white" onClick={() => navigate('/HomePage')}>Home</Nav.Link>
          <Nav.Link className="text-white" href="#">Dashboard</Nav.Link>
          <Nav.Link className="text-white" onClick={() => scrollToSection('recently-visited')}>Properties</Nav.Link>
          <Nav.Link className="text-white" onClick={() => scrollToSection('my-appointments')}>Appointment</Nav.Link>
        </Nav>
        <Button variant="light" className="mt-5 w-100">
          Logout →
        </Button>
      </div>

      {/* Main Content */}
      <Container fluid className="p-4">
        <Navbar className="mb-4">
          <Navbar.Brand>DASHBOARD</Navbar.Brand>
          <Nav className="ms-auto">
            <Button variant="primary" onClick={() => navigate('/PropertyListing')}>+ Add Property</Button>
            <Image src="https://via.placeholder.com/40" roundedCircle className="ms-3" />
          </Nav>
        </Navbar>

        {/* Stats Cards */}
        <Row>
          <Col><Card className="p-3 text-center"><h5>Total properties</h5><h3>550</h3></Card></Col>
          <Col><Card className="p-3 text-center"><h5>Tenants</h5><h3>137</h3></Card></Col>
          <Col><Card className="p-3 text-center"><h5>Sellers</h5><h3>196</h3></Card></Col>
          <Col><Card className="p-3 text-center"><h5>Buyers</h5><h3>254</h3></Card></Col>
        </Row>

        {/* Market Trends */}
        <h5 className="mt-4">Market Trends</h5>
        <Bar data={data} />

        {/* Recently Visited Properties */}
        

        <h5 className="mt-4" id="recently-visited">Recently visited properties</h5>
        <Row className="flex-column">
          {["Apartment", "3 BHK flat", "Villa"].map((type, index) => (
            <Col key={index} className="mb-3">
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>{type}</Card.Title>
                  <Card.Text>Location & Price</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* My Appointments */}
        <h5 className="mt-4" id="my-appointments">My Appointments</h5>
        <Card>
          <Card.Body>
            <Row>
              <Col md={2}><Image src="https://via.placeholder.com/100" rounded /></Col>
              <Col>
                <h6>6BHK Villa</h6>
                <p>Jubilee Hills, Hyderabad - April 6, 2025, 11:00 AM</p>
              </Col>
              <Col md={2} className="text-end">
                <Button variant="outline-danger" size="sm">Cancel</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Dashboard;
