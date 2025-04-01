// Dashboard.js
import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { House, BarChart, Building2, Calendar, LogOut, Plus, ArrowUp } from "lucide-react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [visitedProperties] = useState([
    {
      id: 1,
      name: "Apartment",
      description: "1st floor, Warangal",
      price: "Rs. 1.1Cr",
      img: "/images/drop3.png"
    },
    {
      id: 2,
      name: "3 BHK flat",
      description: "Mumbai",
      price: "Rs. 2Cr",
      img: "/images/drop2.png"
    },
    {
      id: 3,
      name: "Villa",
      description: "Banjara Hills Road",
      price: "Rs. 3Cr",
      img: "/images/drop6.png"
    }
  ]);

  const [appointments] = useState([
    {
      id: 1,
      name: "6BHK villa",
      location: "Gachibowli, Hyderabad",
      date: "April 5, 2023",
      time: "11:00 a.m.",
      img: "/lovable-uploads/ed7258c3-0f1d-4b65-bee8-5ed813982577.png",
      status: "Upcoming"
    }
  ]);

  const statsData = [
    { title: "Listed", value: 550, trend: "up", icon: <House size={20} /> },
    { title: "Viewed", value: 137, trend: "down", icon: <BarChart size={20} /> },
    { title: "Sales", value: 196, trend: "up", icon: <Building2 size={20} /> },
    { title: "Buyers", value: 254, trend: "up", icon: <Calendar size={20} /> }
  ];

  const chartData = [
    { name: 'Jan', value: 125 },
    { name: 'Feb', value: 110 },
    { name: 'Mar', value: 105 },
    { name: 'Apr', value: 120 },
    { name: 'May', value: 90 },
    { name: 'Jun', value: 75 },
    { name: 'Jul', value: 50 },
    { name: 'Aug', value: 65 },
    { name: 'Sep', value: 90 },
    { name: 'Oct', value: 110 },
    { name: 'Nov', value: 125 },
    { name: 'Dec', value: 135 }
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="text-center p-3">
          <div className="avatar-container mx-auto mb-2">
            <span>H</span>
          </div>
          <div className="fw-bold">
            <div>HAVEN</div>
            <div>HOMES</div>
          </div>
        </div>
        
        <div className="mt-5 px-2">
          <a href="#" className="sidebar-link">
            <House size={20} className="me-3" />
            <span className="d-none d-lg-block">Home</span>
          </a>
          <a href="#" className="sidebar-link active">
            <BarChart size={20} className="me-3" />
            <span className="d-none d-lg-block">Dashboard</span>
          </a>
          <a href="#" className="sidebar-link">
            <Building2 size={20} className="me-3" />
            <span className="d-none d-lg-block">Properties</span>
          </a>
          <a href="#" className="sidebar-link">
            <Calendar size={20} className="me-3" />
            <span className="d-none d-lg-block">Appointment</span>
          </a>
        </div>
        
        <div className="mt-auto p-3 position-absolute bottom-0 w-100">
          <a href="#" className="sidebar-link text-center">
            <LogOut size={20} className="me-0 me-lg-2" />
            <span className="d-none d-lg-inline">Logout</span>
          </a>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content flex-grow-1">
        <header className="d-flex justify-content-between align-items-center border-bottom p-3">
          <h2 className="mb-0">DASHBOARD</h2>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              <img
                src="/lovable-uploads/ed7258c3-0f1d-4b65-bee8-5ed813982577.png"
                alt="User"
                className="rounded-circle"
                width="30"
                height="30"
              />
              <span className="ms-2 text-secondary">Admin</span>
              <span className="ms-1">▼</span>
            </div>
            <Button variant="primary" className="add-property-btn d-flex align-items-center">
              <Plus size={16} className="me-1" />
              Add Property
            </Button>
          </div>
        </header>
        
        <Container fluid className="p-4">
          {/* Stats Cards */}
          <Row className="mb-4">
            {statsData.map((stat, index) => (
              <Col key={index} xs={12} sm={6} lg={3} className="mb-3 mb-lg-0">
                <div className="stats-card">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="text-secondary small">{stat.title}</div>
                    <span className={stat.trend === 'up' ? 'text-success' : 'text-danger'}>
                      {stat.trend === 'up' ? '↗' : '↘'}
                    </span>
                  </div>
                  <div className="fs-4 fw-bold">{stat.value}</div>
                </div>
              </Col>
            ))}
          </Row>
          
          {/* Market Trends */}
          <Card className="mb-4">
            <Card.Body>
              <h5 className="mb-1">Market Trends</h5>
              <p className="text-secondary small mb-4">Revenues</p>
              <div className="chart-container">
                <div className="d-flex justify-content-between align-items-end" style={{ height: '200px' }}>
                  {chartData.map((item, index) => (
                    <div key={index} className="d-flex flex-column align-items-center" style={{ flex: 1 }}>
                      <div 
                        className="chart-bar" 
                        style={{ height: `${item.value * 0.8}px` }} 
                      />
                      <div className="text-secondary small mt-2">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
          
          {/* Recently Visited Properties */}
          <div className="mb-4">
            <h5 className="mb-3">Recently visited properties</h5>
            <Row>
              {visitedProperties.map((property) => (
                <Col key={property.id} xs={12} lg={4} className="mb-3">
                  <div className="property-card">
                    <Row className="g-0">
                      <Col xs={8}>
                        <div className="property-info">
                          <h6 className="mb-1">{property.name}</h6>
                          <p className="text-secondary small mb-1">{property.description}</p>
                          <p className="fw-bold mb-0">{property.price}</p>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <img 
                          src={property.img} 
                          alt={property.name}
                          className="property-image"
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          
          {/* My Appointments */}
          <div>
            <h5 className="mb-3">My Appointments</h5>
            {appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-card">
                <Row className="g-0">
                  <Col xs={4} md={3} lg={2}>
                    <img
                      src={appointment.img}
                      alt={appointment.name}
                      className="appointment-image"
                    />
                  </Col>
                  <Col xs={8} md={9} lg={10}>
                    <div className="appointment-details">
                      <h6 className="mb-1">{appointment.name}</h6>
                      <p className="text-secondary small mb-2">
                        {appointment.location}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <Calendar size={16} className="me-1" />
                          <span>{appointment.date}, {appointment.time}</span>
                        </div>
                        <div>
                          <Badge bg={appointment.status === 'Upcoming' ? 'success' : 'secondary'}>
                            {appointment.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
