import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/drop/${category.toLowerCase()}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <Navbar expand="lg" bg="info" variant="dark" className="px-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src="/images/logo1.png" alt="Logo" width="50" height="50" className="rounded-circle me-2" />
          <span className="fw-bold fs-3 text-light">Haven Homes</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium fs-5">
            {/* Buy Dropdown */}
            <NavDropdown title={<span className="text-light">Buy</span>} id="buy-dropdown">
              <NavDropdown.Item onClick={() => handleNavigate("House")}>House</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigate("Apartment")}>Apartment</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigate("Land")}>Land</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigate("Villa")}>Villa</NavDropdown.Item>
            </NavDropdown>

            {/* Rent Dropdown */}
            <NavDropdown title={<span className="text-light">Rent</span>} id="rent-dropdown">
              <NavDropdown.Item onClick={() => handleNavigate("House")}>House</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigate("Apartment")}>Apartment</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigate("Land")}>Land</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigate("Villa")}>Villa</NavDropdown.Item>
            </NavDropdown>

            {/* Sell Dropdown */}
            <NavDropdown title={<span className="text-light">Sell</span>} id="sell-dropdown">
              <NavDropdown.Item onClick={() => handleNavigate("House")}>House</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigate("Apartment")}>Apartment</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigate("Land")}>Land</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigate("Villa")}>Villa</NavDropdown.Item>
            </NavDropdown>

            {/* Other Navigation Links */}
            <Nav.Link onClick={() => navigate("/homeloan")} className="text-light" style={{ cursor: "pointer" }}>
              Loan
            </Nav.Link>

            <Nav.Link onClick={() => navigate("/HelpPage")} className="text-light" style={{ cursor: "pointer" }}>
              Help
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/", { state: { scrollToAboutUs: true } })} className="text-light" style={{ cursor: "pointer" }}>
              About Us
            </Nav.Link>

            {/* User Profile or Signup/Login */}
            {user ? (
              <NavDropdown
                title={
                  <span className="d-flex align-items-center text-light">
                    <img src={user.profilePic || "/images/default.jpg"} alt="User" width="40" height="40" className="rounded-circle me-2" />
                    {user.name.replace(/^Us\s*/, '')}
                  </span>
                }
                id="user-dropdown"
              >
                <NavDropdown.Item onClick={() => navigate("/dashboard")}>Dashboard</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link className="ms-3 text-light d-flex align-items-center" onClick={() => navigate("/signup")} style={{ cursor: "pointer" }}>
                  <FaUserPlus className="me-2" /> Signup
                </Nav.Link>
                <Nav.Link as={Link} to="/login" className="text-light d-flex align-items-center">
                  <FaSignInAlt className="me-2" /> Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
