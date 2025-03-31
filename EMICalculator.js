import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure * 12;
    const emiValue =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">EMI Calculator</h2>
      <p className="text-center">Calculate your home loan EMI here.</p>
      <Card className="p-4 shadow">
        <Form>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Loan Amount (₹)</Form.Label>
                <Form.Control
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Interest Rate (%)</Form.Label>
                <Form.Control
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Loan Tenure (Years)</Form.Label>
                <Form.Control
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="primary" onClick={calculateEMI}>Calculate EMI</Button>
          </div>
        </Form>
        {emi && (
          <h4 className="text-center mt-4">Estimated EMI: ₹{emi} / month</h4>
        )}
      </Card>
    </Container>
  );
};

export default EMICalculator;