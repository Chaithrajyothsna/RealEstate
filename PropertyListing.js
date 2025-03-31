import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FaCloudUploadAlt, FaPlus, FaImage } from "react-icons/fa";

const PropertyListing = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    location: "",
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    listingType: "For Sale",
    propertyType: "House",
    images: [],
  });

  // Handle Input Change
  const handleInputChange = (e) => {
    setPropertyDetails({ ...propertyDetails, [e.target.name]: e.target.value });
  };

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const uploadedImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPropertyDetails({
        ...propertyDetails,
        images: [...propertyDetails.images, ...uploadedImages],
      });
    }
  };

  return (
    <Container fluid className="py-5">
      <h2 className="text-center mb-4 text-primary">📢 List Your Property</h2>

      <Row className="justify-content-center">
        {/* Main Content Section */}
        <Col lg={8}>
          {/* Media Section */}
          <Card className="mb-4 shadow">
            <Card.Body>
              <h5 className="mb-3">📸 Media</h5>
              <p className="text-muted">Upload high-quality images/videos of your property</p>

              <div
                className="border p-4 text-center rounded position-relative"
                style={{ border: "2px dashed #0d6efd", cursor: "pointer" }}
              >
                <FaCloudUploadAlt size={50} className="text-primary mb-3" />
                <p>Drag & drop files here</p>
                <p className="text-muted">or click below</p>
                <Form.Control
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                  onChange={handleImageUpload}
                />
                <Button variant="primary">Choose Files</Button>
                <p className="text-muted mt-2">Supported formats: PNG, JPG, MP4, MOV (max 20MB)</p>
              </div>
            </Card.Body>
          </Card>

          {/* Basic Information Section */}
          <Card className="mb-4 shadow">
            <Card.Body>
              <h5>🏠 Basic Information</h5>
              <p className="text-muted">Specify property type and pricing details</p>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Property Type</Form.Label>
                  <Form.Select name="propertyType" onChange={handleInputChange}>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Office</option>
                  </Form.Select>
                </Col>
                <Col md={6}>
                  <Form.Label>Listing Type</Form.Label>
                  <Form.Select name="listingType" onChange={handleInputChange}>
                    <option>For Sale</option>
                    <option>For Rent</option>
                  </Form.Select>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>💰 Price (total)</Form.Label>
                <InputGroup>
                  <InputGroup.Text>₹</InputGroup.Text>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </Form.Group>
            </Card.Body>
          </Card>

          {/* Property Details Section */}
          <Card className="mb-4 shadow">
            <Card.Body>
              <h5>📋 Property Details</h5>
              <p className="text-muted">Provide detailed information about your property</p>

              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="e.g. Luxury Villa with Pool"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>📍 Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="e.g. 123 Main St, City, State"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Label>🛏️ Bedrooms</Form.Label>
                  <Form.Control
                    type="number"
                    name="bedrooms"
                    min="0"
                    placeholder="0"
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>🛁 Bathrooms</Form.Label>
                  <Form.Control
                    type="number"
                    name="bathrooms"
                    min="0"
                    placeholder="0"
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>📏 Area (sq ft)</Form.Label>
                  <Form.Control
                    type="number"
                    name="area"
                    min="0"
                    placeholder="0"
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Preview Section */}
        <Col lg={4}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <h5>🔍 Preview</h5>
              <div
                className="border rounded text-center p-4 mb-3"
                style={{ height: "200px", background: "#f8f9fa" }}
              >
                {propertyDetails.images.length > 0 ? (
                  <img
                    src={propertyDetails.images[0]}
                    alt="Property Preview"
                    className="img-fluid rounded"
                    style={{ maxHeight: "100%" }}
                  />
                ) : (
                  <p className="text-muted">No images uploaded</p>
                )}
              </div>

              <Card className="mb-3">
                <Card.Body>
                  <Button variant="outline-info" size="sm" className="me-2">
                    {propertyDetails.listingType}
                  </Button>
                  <Button variant="outline-primary" size="sm">
                    {propertyDetails.propertyType}
                  </Button>
                  <hr />
                  <h6>{propertyDetails.title || "Untitled Property"}</h6>
                  <p className="text-muted">
                    {propertyDetails.location || "No location provided"}
                  </p>
                  <p>
                    <strong>₹ {propertyDetails.price || "0"}</strong>
                  </p>
                  <Row>
                    <Col>{propertyDetails.bedrooms} Beds</Col>
                    <Col>{propertyDetails.bathrooms} Baths</Col>
                    <Col>{propertyDetails.area} Sq Ft</Col>
                  </Row>
                </Card.Body>
              </Card>

              <Button variant="success" className="w-100">
                🚀 Submit Listing
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyListing;
