import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const agents = {
  "John Doe": {
    specialty: "Expert in residential properties with 10+ years of experience.",
    mobile: "+91 98765 43210",
    achievements: [
      "Sold 200+ homes in the last 5 years",
      "Awarded 'Top Realtor' 3 years in a row",
      "95% client satisfaction rating",
    ],
    image: "/images/John1.png",
  },
  "Jane Smith": {
    specialty: "Specialist in luxury villas and commercial properties.",
    mobile: "+91 87654 32109",
    achievements: [
      "Closed over ₹500 Cr worth of luxury property deals",
      "Featured in 'Luxury Homes Magazine'",
      "Expert negotiator with high-profile clients",
    ],
    image: "/images/John2.png",
  },
  "Alex Johnson": {
    specialty: "Commercial property expert with a high success rate.",
    mobile: "+91 76543 21098",
    achievements: [
      "Helped 50+ businesses find ideal office spaces",
      "Top 5% agent for commercial properties",
      "Successfully handled ₹1,000 Cr in real estate transactions",
    ],
    image: "/images/John3.png",
  },
};

const Contact = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const agentName = queryParams.get("agent");

  const agent = agents[agentName];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact {agentName || "Our Agents"}</h2>
      
      {agent ? (
        <Card className="mx-auto text-center shadow-lg p-4" style={{ maxWidth: "500px" }}>
          <Card.Img 
            variant="top" 
            src={agent.image} 
            alt={agentName} 
            style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }} 
          />
          <Card.Body>
            <Card.Title className="fw-bold">{agentName}</Card.Title>
            <Card.Text className="text-muted">{agent.specialty}</Card.Text>
            <h5 className="mt-3">📞 {agent.mobile}</h5>
            <h6 className="fw-bold mt-4">🏆 Achievements:</h6>
            <ul className="text-start px-4">
              {agent.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            <Button variant="primary" className="mt-3">Call Now</Button>
          </Card.Body>
        </Card>
      ) : (
        <p className="text-center">Please select an agent from the <strong>Find Agents</strong> section.</p>
      )}
    </Container>
  );
};

export default Contact;
