import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Grid = () => {
  return (
    (
      <Container>
        <Row
          style={{
            justifyContent: "space-evenly",
            paddingTop: "10px",
          }}
        >
          <Col md="auto">
            {" "}
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                  />{" "}
                </div>
              ))}
            </Form>{" "}
          </Col>

          <Col md="auto"> Invoice ID</Col>
          <Col md="auto">Date</Col>
          <Col md="auto">Customer</Col>
          <Col md="auto">Payable Amount</Col>
          <Col md="auto">Paid Amount</Col>
          <Col md="auto">Due</Col>
        </Row>
        <Row style={{ justifyContent: "space-around", paddingTop: "20px" }}>
          <Col md="auto">
            {" "}
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                  />{" "}
                </div>
              ))}
            </Form>{" "}
          </Col>
          <Col md="auto">
            {" "}
            <a href="#"> #AHGA68 </a>{" "}
          </Col>
          <Col md="auto">23/09/2022</Col>
          <Col md="auto">Jacob Marcus</Col>
          <Col md="auto">$100</Col>
          <Col md="auto">$000</Col>
          <Col md="auto">$000</Col>
        </Row>
        <Row style={{ justifyContent: "space-around", paddingTop: "20px" }}>
          <Col md="auto">
            {" "}
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                  />{" "}
                </div>
              ))}
            </Form>{" "}
          </Col>
          <Col md="auto">
            {" "}
            <a href="#"> #AHGA68 </a>{" "}
          </Col>
          <Col md="auto">23/09/2022</Col>
          <Col md="auto">Jacob Marcus</Col>
          <Col md="auto">$100</Col>
          <Col md="auto">$000</Col>
          <Col md="auto">$000</Col>
        </Row>
        <Row style={{ justifyContent: "space-around", paddingTop: "20px" }}>
          <Col md="auto">
            {" "}
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                  />{" "}
                </div>
              ))}
            </Form>{" "}
          </Col>
          <Col md="auto">
            {" "}
            <a href="#"> #AHGA68 </a>{" "}
          </Col>
          <Col md="auto">23/09/2022</Col>
          <Col md="auto">Jacob Marcus</Col>
          <Col md="auto">$100</Col>
          <Col md="auto">$000</Col>
          <Col md="auto">$000</Col>
        </Row>
        <Row style={{ justifyContent: "space-around", paddingTop: "20px" }}>
          <Col md="auto">
            {" "}
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                  />{" "}
                </div>
              ))}
            </Form>{" "}
          </Col>
          <Col md="auto">
            {" "}
            <a href="#"> #AHGA68 </a>{" "}
          </Col>
          <Col md="auto">23/09/2022</Col>
          <Col md="auto">Jacob Marcus</Col>
          <Col md="auto">$100</Col>
          <Col md="auto">$000</Col>
          <Col md="auto">$000</Col>
        </Row>
        <Row style={{ justifyContent: "space-around", paddingTop: "20px" }}>
          <Col md="auto">
            {" "}
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                  />{" "}
                </div>
              ))}
            </Form>{" "}
          </Col>
          <Col md="auto">
            {" "}
            <a href="#"> #AHGA68 </a>{" "}
          </Col>
          <Col md="auto">23/09/2022</Col>
          <Col md="auto">Jacob Marcus</Col>
          <Col md="auto">$100</Col>
          <Col md="auto">$000</Col>
          <Col md="auto">$000</Col>
        </Row>
        <Row style={{ justifyContent: "space-around", paddingTop: "20px" }}>
          <Col md="auto">
            {" "}
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                  />{" "}
                </div>
              ))}
            </Form>{" "}
          </Col>
          <Col md="auto">
            {" "}
            <a href="#"> #AHGA68 </a>{" "}
          </Col>
          <Col md="auto">23/09/2022</Col>
          <Col md="auto">Jacob Marcus</Col>
          <Col md="auto">$100</Col>
          <Col md="auto">$000</Col>
          <Col md="auto">$000</Col>
        </Row>
        <Row style={{ justifyContent: "space-around", paddingTop: "20px" }}>
          <Col md="auto">
            {" "}
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                  />{" "}
                </div>
              ))}
            </Form>{" "}
          </Col>
          <Col md="auto">
            {" "}
            <a href="#"> #AHGA68 </a>{" "}
          </Col>
          <Col md="auto">23/09/2022</Col>
          <Col md="auto">Jacob Marcus</Col>
          <Col md="auto">$100</Col>
          <Col md="auto">$000</Col>
          <Col md="auto">$000</Col>
        </Row>
      </Container>
    ),
    (
      <div>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#ADA7A7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="#ADA7A7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input type="text" placeholder="search"></input>
      </div>
    )
  );
};

export default Grid;