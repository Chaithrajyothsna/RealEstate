import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const navigate = useNavigate();

  const COLORS = ["#0088FE", "#FF8042"];

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure * 12;

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalPay = emiValue * months;
    const interestPay = totalPay - principal;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(interestPay.toFixed(2));
    setTotalPayment(totalPay.toFixed(2));
  };

  const resetForm = () => {
    setLoanAmount(5000000);
    setInterestRate(7.5);
    setLoanTenure(20);
    setEmi(null);
    setTotalInterest(null);
    setTotalPayment(null);
  };

  const chartData = [
    { name: "Principal", value: Number(loanAmount) },
    { name: "Interest", value: Number(totalInterest) },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-3 text-primary">🏦 EMI Calculator</h2>
      <p className="text-center text-muted mb-4">
        Easily estimate your monthly home loan installment and total repayment.
      </p>

      <Card className="p-4 shadow-lg">
        <Form>
          <Row className="mb-4">
            <Col md={4} sm={12} className="mb-3">
              <Form.Group>
                <Form.Label className="fw-semibold">Loan Amount (₹)</Form.Label>
                <InputGroup>
                  <InputGroup.Text>₹</InputGroup.Text>
                  <Form.Control
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Form.Group>
                <Form.Label className="fw-semibold">Interest Rate (%)</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                  <InputGroup.Text>%</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Form.Group>
                <Form.Label className="fw-semibold">Loan Tenure (Years)</Form.Label>
                <Form.Control
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-center mb-3">
            <Button variant="success" onClick={calculateEMI} className="me-2">
              Calculate EMI
            </Button>
            <Button variant="outline-secondary" onClick={resetForm} className="me-2">
              Reset
            </Button>
            <Button variant="outline-dark" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </div>
        </Form>

        {emi && (
          <Row className="mt-4">
            <Col md={6}>
              <Card className="bg-light p-3 text-center shadow-sm mb-3">
                <h5>💰 <strong>Estimated EMI:</strong> ₹{emi} / month</h5>
                <p className="mb-0">📈 Total Interest Payable: ₹{totalInterest}</p>
                <p className="mb-0">💸 Total Amount Payable: ₹{totalPayment}</p>
              </Card>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <PieChart width={300} height={250}>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={90}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value}`} />
                <Legend />
              </PieChart>
            </Col>
          </Row>
        )}
      </Card>
    </Container>
  );
};

export default EMICalculator;
